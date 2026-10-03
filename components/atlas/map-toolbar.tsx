import {
  Users,
  Landmark,
  Building2,
  ArrowRightLeft,
  Map as MapIcon,
  BookOpen
} from 'lucide-react';

interface MapToolbarProps {
  activeCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function MapToolbar({activeCategory, onSelectCategory}: MapToolbarProps) {
  const categories = [
    {id: 'human', icon: Users, label: 'Human'},
    {id: 'ottoman', icon: Landmark, label: 'Ottoman'},
    {id: 'heritage', icon: Building2, label: 'Heritage'},
    {id: 'change', icon: ArrowRightLeft, label: 'Change'},
    {id: 'basemap', icon: MapIcon, label: 'Basemap'},
    {id: 'research', icon: BookOpen, label: 'Research'}
  ];

  return (
    <div className="map-toolbar">
      {categories.map(c => {
        const Icon = c.icon;
        const isActive = activeCategory === c.id;
        return (
          <button
            key={c.id}
            className={`toolbar-btn ${isActive ? 'active' : ''}`}
            onClick={() => onSelectCategory(isActive ? null : c.id)}
            aria-label={c.label}
          >
            <Icon size={20} />
            <span>{c.label}</span>
          </button>
        );
      })}
    </div>
  );
}
