'use client';

import {
  Users,
  Landmark,
  Building2,
  ArrowRightLeft,
  Map as MapIcon,
  BookOpen
} from 'lucide-react';
import { useStore } from '@/lib/store';

interface MapToolbarProps {
  activeCategory?: string | null;
  onSelectCategory?: (category: string | null) => void;
}

export function MapToolbar({
  activeCategory: propCategory,
  onSelectCategory: propOnSelectCategory
}: MapToolbarProps = {}) {
  const storeCategory = useStore(s => s.activeCategory);
  const storeSetCategory = useStore(s => s.setActiveCategory);

  const activeCategory = propCategory !== undefined ? propCategory : storeCategory;
  const onSelectCategory = propOnSelectCategory || storeSetCategory;

  const categories = [
    {id: 'human', icon: Users, label: 'İnsan'},
    {id: 'ottoman', icon: Landmark, label: 'Osmanlı'},
    {id: 'heritage', icon: Building2, label: 'Miras'},
    {id: 'change', icon: ArrowRightLeft, label: 'Değişim'},
    {id: 'basemap', icon: MapIcon, label: 'Harita'},
    {id: 'research', icon: BookOpen, label: 'Kaynak'}
  ];

  return (
    <div className="map-toolbar" role="toolbar" aria-label="Atlas katman çubuğu">
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
