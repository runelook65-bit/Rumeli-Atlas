'use client';

import { useStore } from '@/lib/store';
import { CheckCircle2, Info } from 'lucide-react';

export function AtlasToast() {
  const toast = useStore((s) => s.toast);

  if (!toast) return null;

  return (
    <div className="atlas-toast-container" role="status" aria-live="polite">
      <div className="atlas-toast-pill">
        <CheckCircle2 size={16} className="toast-icon" />
        <span>{toast}</span>
      </div>
    </div>
  );
}
