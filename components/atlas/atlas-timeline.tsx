import {Play, Pause, Info} from 'lucide-react';
import {Slider} from '@/components/ui/slider';

interface AtlasTimelineProps {
  year: number;
  onYearChange: (year: number) => void;
  playing: boolean;
  onPlayingToggle: () => void;
}

const keyYears = [1354, 1455, 1530, 1699, 1894, 1925, 2026];

export function AtlasTimeline({
  year,
  onYearChange,
  playing,
  onPlayingToggle
}: AtlasTimelineProps) {
  return (
    <footer className="timeline">
      <div className="year-box">
        <span>SEÇİLİ YIL</span>
        <strong>{year}</strong>
      </div>

      <button
        className="play"
        aria-label={playing ? 'Zamanı durdur' : 'Zamanı oynat'}
        onClick={onPlayingToggle}
      >
        {playing ? <Pause size={17} /> : <Play size={17} />}
      </button>

      <div className="timeline-track">
        <Slider
          min={1354}
          max={2026}
          step={1}
          value={[year]}
          onValueChange={v => onYearChange(v[0])}
          aria-label="Tarih yılı"
        />
        <div className="year-ticks">
          {keyYears.map(y => (
            <button
              key={y}
              className={year === y ? 'selected' : ''}
              onClick={() => onYearChange(y)}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      <div className="timeline-note">
        <Info size={16} />
        <span>
          Boş yıl, yokluk kanıtı değildir.<br />
          <small>Nüfus verileri kayıt yılına aittir.</small>
        </span>
      </div>
    </footer>
  );
}
