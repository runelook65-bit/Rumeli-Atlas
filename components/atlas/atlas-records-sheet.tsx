import {MapPin} from 'lucide-react';
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription} from '@/components/ui/sheet';
import type {Place} from '@/lib/atlas-data';

interface AtlasRecordsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  clusterPlaces: Place[] | null;
  filteredPlaces: Place[];
  year: number;
  mode: 'atlas' | 'lost';
  onSelectPlace: (place: Place) => void;
}

export function AtlasRecordsSheet({
  open,
  onOpenChange,
  clusterPlaces,
  filteredPlaces,
  year,
  mode,
  onSelectPlace
}: AtlasRecordsSheetProps) {
  const currentList = clusterPlaces ?? filteredPlaces;

  const title = clusterPlaces
    ? 'Bu konumdaki kayıtlar'
    : mode === 'lost'
    ? 'Kaybolan miras'
    : 'Bu yıldaki kayıtlar';

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="max-h-[75dvh] bg-[#FAF8F2] border-t border-[#dddcd1] rounded-t-2xl p-0 flex flex-col sm:max-w-xl sm:mx-auto sm:rounded-t-2xl">
        <SheetHeader className="p-6 pb-3 text-left">
          <SheetTitle className="font-serif text-2xl text-primary">{title}</SheetTitle>
          <SheetDescription className="text-xs text-gray-500">
            {year} · {currentList.length} kaynaklı kayıt
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 pb-6 divide-y divide-[#e3e7db]">
          {currentList.map(p => (
            <button
              key={p.id}
              onClick={() => onSelectPlace(p)}
              className="flex items-center gap-3 py-3 w-full text-left hover:bg-black/[0.03] transition-colors rounded-lg px-2 -mx-2"
            >
              <span
                className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                  p.lost
                    ? 'border border-[#846e79] bg-transparent'
                    : p.layer === 'heritage'
                    ? 'bg-[#B38A4A]'
                    : 'bg-[#9D493A]'
                }`}
              />
              <span className="flex-1 min-w-0">
                <strong className="block font-serif text-base text-[#25352F] truncate">
                  {p.name}
                </strong>
                <small className="block text-xs text-[#6F786F] truncate">
                  {p.modern} · {p.layer === 'heritage' ? 'Kültürel miras' : 'Yerleşim'}
                </small>
              </span>
              <MapPin size={16} className="text-[#6F786F] shrink-0" />
            </button>
          ))}

          {!currentList.length && (
            <p className="py-6 text-sm text-gray-500 text-center">
              Bu yıl ve katmanlarda kayıt yok. Yılı veya katmanları değiştirin.
            </p>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
