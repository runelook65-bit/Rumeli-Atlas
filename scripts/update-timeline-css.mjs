import fs from 'node:fs';

let css = fs.readFileSync('app/globals.css', 'utf8');

// 1. Update count-pill and period-map-control positions so they don't collide with timeline dock
css = css.replace(
  /\.count-pill\s*\{[\s\S]*?bottom:\s*96px;/,
  (match) => match.replace('bottom: 96px;', 'bottom: 144px;')
);

css = css.replace(
  /\.period-map-control\s*\{[\s\S]*?bottom:\s*96px;/,
  (match) => match.replace('bottom: 96px;', 'bottom: 144px;')
);

css = css.replace(
  /\.map-legend\s*\{[\s\S]*?bottom:\s*170px;/,
  (match) => match.replace('bottom: 170px;', 'bottom: 198px;')
);

// 2. Refine .temporal-console-dock styles
const oldDock = `/* ── Floating Chronometer Master Console Dock (25% Compact & Centered) ── */
.temporal-console-dock {
  position: absolute;
  bottom: 14px;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  width: min(1060px, calc(100vw - 48px));
  max-width: 1060px;
  background: var(--atlas-glass-elevated);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid var(--atlas-border);
  border-radius: 16px;
  box-shadow: var(--atlas-shadow-lg), 0 0 0 1px rgba(255, 255, 255, 0.7) inset;
  z-index: 25;
  pointer-events: auto;
}`;

const newDock = `/* ── Floating Chronometer Master Console Dock (V2 GIS Historical Instrument) ── */
.temporal-console-dock {
  position: absolute;
  bottom: 16px;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  width: min(1140px, calc(100vw - 32px));
  max-width: 1140px;
  background: rgba(254, 252, 246, 0.95);
  backdrop-filter: blur(24px) saturate(160%);
  -webkit-backdrop-filter: blur(24px) saturate(160%);
  border: 1px solid rgba(197, 160, 89, 0.4);
  border-radius: 20px;
  box-shadow: 0 16px 40px -6px rgba(28, 38, 35, 0.16), 0 2px 8px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.85) inset;
  z-index: 25;
  pointer-events: auto;
  padding: 12px 18px 10px 18px;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

@media (max-width: 1024px) {
  .temporal-console-dock {
    width: calc(100vw - 24px);
    padding: 10px 14px 8px 14px;
    bottom: 12px;
  }
}`;

if (css.includes(oldDock)) {
  css = css.replace(oldDock, newDock);
  console.log('Replaced oldDock styles.');
} else {
  console.log('oldDock exact match not found, checking alternatives...');
}

// 3. Hide floating .map-top on desktop since region selector is integrated in the dock
if (!css.includes('.map-top-dock-hidden')) {
  css += `\n/* Hide top region selector on desktop as it is integrated inside Timeline V2 Dock */\n@media (min-width: 768px) {\n  .map-top {\n    display: none;\n  }\n}\n`;
}

fs.writeFileSync('app/globals.css', css, 'utf8');
console.log('app/globals.css successfully updated.');
