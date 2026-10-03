import { useEffect, useState } from 'react';
import { useStore } from './store';

/**
 * Returns a year value that lags behind the live `store.year` by `delayMs`,
 * resetting the timer on every fresh change. Heavy map recalculations
 * (filtering 467+ places, computing historical observations, marker repositioning)
 * consume this instead of `store.year` so a rapid slider drag doesn't cause
 * stutter or unneeded DOM thrashing.
 *
 * The slider readout, large year label, and input fields continue using
 * live `store.year` for 60fps immediate responsiveness.
 */
export function useDeferredYear(delayMs = 70): number {
  const live = useStore((s) => s.year);
  const [deferred, setDeferred] = useState(live);

  useEffect(() => {
    if (live === deferred) return;
    const t = window.setTimeout(() => setDeferred(live), delayMs);
    return () => window.clearTimeout(t);
  }, [live, delayMs, deferred]);

  return deferred;
}
