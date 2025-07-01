// Imports:
import { cn } from '@/lib/utils';
import { Chip } from '@material-tailwind/react';

export default function RemovableChip({
  value,
  onClose,
  className = '',
}: {
  value: string;
  onClose: () => void;
  className?: string;
}) {
  return (
    <Chip
      value={value}
      onClose={onClose}
      className={cn(
        'w-fit p-3 bg-stroke border border-stroke text-neutral-600 text-ellipsis text-base font-medium rounded-lg capitalize',
        className
      )}
    />
  );
}
