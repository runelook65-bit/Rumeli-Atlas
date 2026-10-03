# RUMELIA ATLAS — Geliştirme paketi

Interactive Historical Atlas of the Balkans

Bu paket son yayımlanmış sürümün kaynak kodunu içerir. Mobil estetik düzenleme, yakın kayıtların gruplanması ve araştırma v1 içe aktarımı dahildir.

## Antigravity’de açma

1. ZIP’i çıkarıp `rumelia-atlas` klasörünü Antigravity’de proje olarak aç.
2. Node.js 24 LTS kullan. Proje en az Node 22.13 ister; TypeScript veri testleri için Node 24 tercih et.
3. Projenin `packageManager` alanındaki pnpm sürümünü kullan (11.25.0).
4. Proje kökünde aşağıdaki komutları çalıştır:

```sh
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
pnpm dev
```

Corepack sisteminde yoksa pnpm’i kendi kurulum yöntemine göre kur. Geliştirme adresi varsayılan olarak http://localhost:5173 olur; terminalin yazdığı adresi esas al.

## Doğrulama ve derleme

```sh
pnpm exec tsc --noEmit
node research/verify-pilot.mjs
node research/verify-import.mjs
pnpm build
pnpm start
```

`pnpm start` derlenmiş Cloudflare Worker’ını yerelde önizler. Üretime yayımlama ayrı işlemdir. Bu arşivin kaynak sürümünde TypeScript kontrolü, iki veri doğrulaması ve üretim derlemesi geçti. Mobil etkileşimler 390 CSS piksel genişlikte Chromium önizlemesinde kontrol edildi; fiziksel iPhone testi değildir.

## Mevcut teknik durum

- Next.js App Router yapısı, React 19, TypeScript, Tailwind 4; çalışma/derleme motoru **Vinext + Vite + Cloudflare Worker**. Saf `next dev` projesi sanıp yapılandırmayı silme.
- Etkin harita motoru **Leaflet**. MapLibre uygulaması ve yerel worker dosyaları kaynakta mevcut; tekrarlayan mobil boş harita sorunları nedeniyle varsayılan motor Leaflet’tir.
- Yerel Natural Earth GeoJSON tabanı ve SSR SVG tabanı sayesinde dış sokak tile servisi olmadan da coğrafya gösterilir. Güncel sokak haritası OSM dış servisinden gelir.
- Harita, 1354–2026 zaman çizgisi, katmanlar, tarihsel/modern ad araması, kayıt paneli, kaynak paneli ve Lost Rumelia çalışır.
- 44 konumlandırılmış nesne, 38 kaynak. 44 nesne 12 yerleşim/site ve 32 miras nesnesinden oluşur. Görünür sayı seçili yıla/katmana göre değişir.
- Supabase/PostGIS şeması ile Supabase ve PMTiles yardımcıları hazırlanmıştır; **canlı veritabanı veya PMTiles yayınına bağlı değildir**. Harita verileri yerel JSON’dan okunur. Başlangıç için API anahtarı gerekmez.

## Dosyalar

- `app/page.tsx`: atlas ekranı, timeline, arama, katman/panel durumu.
- `app/globals.css`: masaüstü ve mobil görünüm.
- `lib/atlas-map.ts`: etkin Leaflet haritası, sayılı gruplar ve MapLibre uygulaması.
- `lib/atlas-data.ts`: çekirdek veriler, içe aktarım birleştirmesi, yıl/katman filtresi, ad indeksi.
- `lib/research-v1.json`: normalize edilmiş araştırma paketi.
- `public/data/research-v1/`: CSV, GeoJSON, raporlar ve kalite denetimi.
- `research/`: veri işleme scriptleri, kaynak araştırması ve doğrulama testleri.
- `database/001_atlas.sql`: taslak PostGIS/Supabase şeması.
- `lib/storage.ts`: henüz canlıya bağlanmamış veri/tile yardımcıları.
- `docs/ANTIGRAVITY_HANDOFF.md`: sonraki geliştirme için açıklamalar ve başlangıç istemi.
- `docs/STARTER_README.md`: kullanılan çalışma iskeletinin özgün teknik belgesi.
- `EXPORT_MANIFEST.json`: kaynak commit’i ve paket dosyalarının SHA-256 özeti.

## Verinin yorumlanması

Etnisite, din, dil, tarihsel hukukî cemaat, yerleşim kökeni ve idarî yapı farklı kategorilerdir. Birini diğerinden türetme. Hâne, aile, kişi ve yüzdeyi birleştirme. Eksik veri yokluk kanıtı değildir. Günümüz sınırları tarihsel egemenlik sınırları değildir.

Araştırma v1 kayıtları paket kaynaklarından işlendi; birincil belgeler bağımsız olarak bütünüyle doğrulanmış değildir. Paketteki HIGH etiketi otomatik bilimsel doğrulama sayılmaz. Tarih, koordinat hassasiyeti, kapsam, karşıt yorum ve kaynak notlarını koru.

`node_modules`, Git geçmişi, derleme çıktısı, çalışma önbellekleri ve gizli anahtarlar pakete dahil değildir. Kaynak veriler ve worker dosyaları dahildir. `.openai/hosting.json` mevcut Sites proje tanımıdır, parola değildir. Başka bir hosta geçiş için önce Vinext/Worker uyumluluğunu değerlendir.
