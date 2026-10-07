'use client';

import { Map as MapIcon, History, BookOpen, FileEdit } from 'lucide-react';
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
      {/* Sol: Rumeli Atlas Logosu */}
      <a className="brand" href="/" aria-label="Rumeli Atlas">
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
      </a>

      {/* Orta: Arama Çubuğu */}
      <div className="header-center">
        {children}
      </div>

      {/* Sağ: Atlas / Lost Rumelia Mod Seçici ve Eylem Butonları */}
      <div className="header-right">
        <nav aria-label="Atlas modu" className="mode-toggle">
          <button
            className={mode === 'atlas' ? 'active' : ''}
            onClick={() => onModeChange('atlas')}
          >
            <MapIcon size={15} />
            Atlas
          </button>
          <button
            className={mode === 'lost' ? 'active' : ''}
            onClick={() => onModeChange('lost')}
          >
            <History size={15} />
            Lost Rumelia
          </button>
        </nav>

        <div className="header-actions">
          <button
            aria-label="Araştırmaya Katkı Ver"
            className="source-button flex items-center gap-1.5"
            onClick={() => useStore.getState().setContributionModalOpen(true)}
            title="001_atlas.sql Uyumlu Araştırma ve Düzeltme Girişi"
          >
            <FileEdit size={15} />
            <span>Katkı Ver</span>
          </button>
          <button
            aria-label="Kaynaklar ve yöntem"
            className="source-button flex items-center gap-1.5"
            onClick={onOpenSources}
          >
            <BookOpen size={15} />
            <span>Sources</span>
          </button>
        </div>
      </div>
    </header>
  );
}
