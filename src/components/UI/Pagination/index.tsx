// Imports:
import { cn } from '@/lib/utils';
import { useFilterStore } from '@/stores/useFilterStore';
import { Button, IconButton } from '@material-tailwind/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Pagination({
  className,
  totalPages,
}: {
  className?: string;
  totalPages?: number;
}) {
  const { page, setPage } = useFilterStore();

  function next() {
    if (page < Number(totalPages)) {
      setPage(page + 1);
    }
  }

  function prev() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <Button
        className="flex items-center bg-red-800 text-red-200 rounded-lg"
        onClick={prev}
        disabled={page === 1}
        ripple
      >
        <ChevronLeft />
      </Button>

      {totalPages && (
        <div className="flex items-center gap-3 overflow-hidden">
          {[...Array(totalPages)].map((_, index) => (
            <IconButton
              key={index + 1}
              className="p-4 rounded-lg bg-input border border-stroke text-neutral-800 font-medium text-lg"
            >
              {index + 1}
            </IconButton>
          ))}
        </div>
      )}

      <Button
        className="flex items-center bg-red-800 text-red-200 rounded-lg"
        onClick={next}
        disabled={page === totalPages}
        ripple
      >
        <ChevronRight />
      </Button>
    </div>
  );
}
