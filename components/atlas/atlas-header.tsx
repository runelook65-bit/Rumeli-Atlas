import {Compass, Map as MapIcon, History, BookOpen, Search} from 'lucide-react';

interface AtlasHeaderProps {
  mode: 'atlas' | 'lost';
  onModeChange: (mode: 'atlas' | 'lost') => void;
  onOpenSources: () => void;
  // We'll pass children for the Search component to be injected here
  children?: React.ReactNode;
}

export function AtlasHeader({mode, onModeChange, onOpenSources, children}: AtlasHeaderProps) {
  return (
    <header className="topbar">
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
