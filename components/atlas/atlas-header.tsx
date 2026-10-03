'use client';

import { Compass, Map as MapIcon, History, BookOpen } from 'lucide-react';
import { useStore, type AtlasMode } from '@/lib/store';

interface AtlasHeaderProps {
  mode?: AtlasMode;
  onModeChange?: (mode: AtlasMode) => void;
  onOpenSources?: () => void;
  children?: React.ReactNode;
}

export function AtlasHeader({
  mode: propMode,
  onModeChange: propOnModeChange,
  onOpenSources: propOnOpenSources,
  children
}: AtlasHeaderProps = {}) {
  const storeMode = useStore(s => s.mode);
  const storeSetMode = useStore(s => s.setMode);
  const storeSetSourcesOpen = useStore(s => s.setSourcesOpen);
  const storeSetSelectedPlace = useStore(s => s.setSelectedPlace);

  const mode = propMode !== undefined ? propMode : storeMode;
  const onModeChange = propOnModeChange || ((newMode: AtlasMode) => {
    storeSetMode(newMode);
    storeSetSelectedPlace(null);
  });
  const onOpenSources = propOnOpenSources || (() => storeSetSourcesOpen(true));

  return (
    <header className={`topbar ${mode === 'lost' ? 'topbar-lost' : ''}`}>
      <a className="brand" href="/" aria-label="Rumelia Atlas">
        <Compass className="brand-icon" size={28} />
        <div>
          <h1>RUMELIA <em>ATLAS</em></h1>
        </div>
      </a>

      <nav aria-label="Atlas modu" className="mode-toggle">
        <button
          className={mode === 'atlas' ? 'active' : ''}
          onClick={() => onModeChange('atlas')}
        >
          <MapIcon size={16} />
          Atlas
        </button>
        <button
          className={mode === 'lost' ? 'active' : ''}
          onClick={() => onModeChange('lost')}
        >
          <History size={16} />
          Lost Rumelia
        </button>
      </nav>

      <div className="header-right">
        {children}
        <button
          aria-label="Kaynaklar ve yöntem"
          className="source-button"
          onClick={onOpenSources}
        >
          <BookOpen size={16} />
          <span>Sources</span>
        </button>
      </div>
    </header>
  );
}
