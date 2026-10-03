-- Supabase/PostgreSQL migration. No inferred ethnicity or interpolated population.
create extension if not exists postgis;
create extension if not exists pg_trgm;
create type public.atlas_dimension as enum ('community','ethnicity','language','religion','administration','settlement_origin','heritage','migration','transport','cultural_region');
create type public.evidence_confidence as enum ('high','medium','low','unassessed');
create table public.sources (
 id uuid primary key default gen_random_uuid(), title text not null, author text, publisher text,
 publication_date text not null, url text not null, source_kind text not null,
 accessed_at date not null, license text not null default 'Rights not established; factual summaries only'
);
create table public.entities (
 id uuid primary key default gen_random_uuid(), slug text unique not null,
 modern_name text not null, entity_type text not null check(entity_type in ('settlement','neighbourhood','heritage','administrative_unit','cultural_region','route')),
 geometry geometry(Geometry,4326), geometry_method text,
 accuracy_meters numeric check(accuracy_meters>=0), geometry_source uuid references public.sources,
 review_status text not null default 'draft' check(review_status in ('draft','reviewed','published')),
 created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create index entities_geometry on public.entities using gist(geometry);
create table public.names (
 id uuid primary key default gen_random_uuid(), entity_id uuid not null references public.entities on delete cascade,
 name text not null, language_code text not null, name_type text not null check(name_type in ('modern','historical','exonym','variant')),
 valid_from integer, valid_to integer, source_id uuid not null references public.sources,
 check(valid_to is null or valid_from is null or valid_to>=valid_from)
);
create index names_trigram on public.names using gin(name gin_trgm_ops);
create table public.observations (
 id uuid primary key default gen_random_uuid(), entity_id uuid not null references public.entities,
 dimension public.atlas_dimension not null, category text not null, original_category text,
 valid_from integer, valid_to integer, date_precision text not null,
 date_basis text not null check(date_basis in ('event','observation','publication','attestation')),
 spatial_scope text not null, geometry geometry(Geometry,4326), confidence public.evidence_confidence not null,
 statement text not null, uncertainty text, observed_at date, source_id uuid not null references public.sources,
 source_locator text not null, review_status text not null default 'draft' check(review_status in ('draft','reviewed','published')),
 check(valid_to is null or valid_from is null or valid_to>=valid_from)
);
create index observations_time on public.observations(valid_from,valid_to);
create index observations_geometry on public.observations using gist(geometry);
create table public.measurements (
 id uuid primary key default gen_random_uuid(), observation_id uuid not null references public.observations on delete cascade,
 label text not null, value numeric not null check(value>=0), unit text not null check(unit in ('persons','households','percent','buildings','unknown','kişi','hâne','yüzde','yapı')),
 denominator numeric check(denominator>0), is_estimate boolean not null default false,
 estimation_method text, territorial_scope text not null, comparability_notes text,
 check(not is_estimate or estimation_method is not null)
);
create table public.alternative_interpretations (
 id uuid primary key default gen_random_uuid(), observation_id uuid not null references public.observations,
 statement text not null, source_id uuid not null references public.sources, source_locator text not null
);
create table public.events (
 id uuid primary key default gen_random_uuid(), entity_id uuid not null references public.entities,
 event_type text not null, earliest_year integer, latest_year integer, statement text not null,
 source_id uuid not null references public.sources, source_locator text not null,
 confidence public.evidence_confidence not null, check(latest_year is null or earliest_year is null or latest_year>=earliest_year)
);
create table public.heritage_states (
 id uuid primary key default gen_random_uuid(), entity_id uuid not null references public.entities,
 state text not null check(state in ('extant','destroyed','partially_lost','repurposed','ruin','unknown')),
 as_of_year integer not null, earliest_change_year integer, latest_change_year integer,
 use_category text, source_id uuid not null references public.sources, source_locator text not null,
 statement text not null, check(latest_change_year is null or earliest_change_year is null or latest_change_year>=earliest_change_year)
);
-- Read-only public atlas; publication is a reviewed editorial action, not a browser write.
alter table public.sources enable row level security;
alter table public.entities enable row level security;
alter table public.names enable row level security;
alter table public.observations enable row level security;
alter table public.measurements enable row level security;
alter table public.alternative_interpretations enable row level security;
alter table public.events enable row level security;
alter table public.heritage_states enable row level security;
create policy read_sources on public.sources for select using (true);
create policy read_entities on public.entities for select using(review_status='published');
create policy read_names on public.names for select using(exists(select 1 from public.entities e where e.id=entity_id and e.review_status='published'));
create policy read_observations on public.observations for select using(review_status='published' and exists(select 1 from public.entities e where e.id=entity_id and e.review_status='published'));
create policy read_measurements on public.measurements for select using(exists(select 1 from public.observations o where o.id=observation_id and o.review_status='published'));
create policy read_alternatives on public.alternative_interpretations for select using(exists(select 1 from public.observations o where o.id=observation_id and o.review_status='published'));
create policy read_events on public.events for select using(exists(select 1 from public.entities e where e.id=entity_id and e.review_status='published'));
create policy read_heritage on public.heritage_states for select using(exists(select 1 from public.entities e where e.id=entity_id and e.review_status='published'));
