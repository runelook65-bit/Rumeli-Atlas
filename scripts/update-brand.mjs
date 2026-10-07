import fs from 'node:fs';

// 1. Update components/atlas/atlas-header.tsx
let headerContent = fs.readFileSync('components/atlas/atlas-header.tsx', 'utf8');

const oldHeaderBrand = `      <a className="brand" href="/" aria-label="Rumelia Atlas">
        <Compass className="brand-icon" size={28} />
        <div>
          <h1>RUMELIA <em>ATLAS</em></h1>
        </div>
      </a>`;

const newHeaderBrand = `      <a className="brand" href="/" aria-label="Rumeli Atlas">
        <img
          src="/images/rumelia-atlas-logo.png"
          alt="Rumeli Atlas"
          className="brand-logo brand-logo-full"
          height={40}
        />
        <img
          src="/images/rumelia-atlas-emblem.png"
          alt="Rumeli Atlas"
          className="brand-logo brand-logo-compact"
          height={38}
        />
      </a>`;

if (headerContent.includes(oldHeaderBrand)) {
  headerContent = headerContent.replace(oldHeaderBrand, newHeaderBrand);
  // remove unused Compass import if desired
  headerContent = headerContent.replace(
    "import { Compass, Map as MapIcon,",
    "import { Map as MapIcon,"
  );
  fs.writeFileSync('components/atlas/atlas-header.tsx', headerContent, 'utf8');
  console.log('Updated atlas-header.tsx');
} else {
  console.log('oldHeaderBrand not found in atlas-header.tsx');
}

// 2. Update app/globals.css brand styles
let cssContent = fs.readFileSync('app/globals.css', 'utf8');

const oldCssBrand = `.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}
.brand-icon { 
  color: var(--atlas-gold); 
  filter: drop-shadow(0 1px 3px rgba(197, 160, 89, 0.4));
  stroke-width: 1.6; 
  transition: transform 300ms ease;
}
.brand:hover .brand-icon {
  transform: rotate(30deg);
}
.brand h1 {
  font: 600 20px Georgia, "Iowan Old Style", serif;
  letter-spacing: 0.12em;
  color: var(--atlas-text);
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.brand h1 em {
  font-weight: 400;
  font-style: italic;
  color: var(--atlas-burgundy);
  letter-spacing: 0.04em;
}`;

const newCssBrand = `.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  transition: opacity 180ms ease, transform 180ms ease;
}
.brand:hover {
  opacity: 0.94;
  transform: translateY(-0.5px);
}
.brand-logo {
  height: 38px;
  width: auto;
  object-fit: contain;
  display: block;
  filter: drop-shadow(0 1px 2px rgba(0, 90, 62, 0.08));
  transition: filter 200ms ease, transform 200ms ease;
}
.brand:hover .brand-logo {
  filter: drop-shadow(0 2px 6px rgba(0, 90, 62, 0.18));
}
.brand-logo-compact {
  display: none;
}

@media (max-width: 640px) {
  .brand-logo-full {
    display: none;
  }
  .brand-logo-compact {
    display: block;
    height: 34px;
    width: auto;
  }
}

.brand-icon { 
  color: var(--atlas-gold); 
  filter: drop-shadow(0 1px 3px rgba(197, 160, 89, 0.4));
  stroke-width: 1.6; 
  transition: transform 300ms ease;
}
.brand:hover .brand-icon {
  transform: rotate(30deg);
}
.brand h1 {
  font: 600 20px Georgia, "Iowan Old Style", serif;
  letter-spacing: 0.12em;
  color: var(--atlas-green);
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.brand h1 em {
  font-weight: 400;
  font-style: italic;
  color: var(--atlas-green);
  letter-spacing: 0.04em;
}`;

if (cssContent.includes(oldCssBrand)) {
  cssContent = cssContent.replace(oldCssBrand, newCssBrand);
  fs.writeFileSync('app/globals.css', cssContent, 'utf8');
  console.log('Updated app/globals.css');
} else {
  console.log('oldCssBrand not found in app/globals.css');
}
