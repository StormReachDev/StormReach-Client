// Imports:
import { cn } from '@/lib/utils';
import { AppointmentData, DisputeData } from '@/types/Custom/Modules/Dashboard';
import { Typography } from '@material-tailwind/react';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Dropdown({
  options,
  selected,
  onChange,
  className = '',
}: {
  options: Record<string, DisputeData | AppointmentData>;
  selected: string;
  onChange: (_option: string) => void;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn('relative', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-red-200 text-red-800 p-2 rounded-md flex items-center gap-x-2"
      >
        <Typography variant="small" className="font-semibold text-xs">
          {selected}
        </Typography>
        <ChevronDown
          className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-stroke rounded-md border border-stroke z-10 min-w-[140px]">
          {Object.keys(options).map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full text-left py-2 px-3 text-neutral-800 hover:bg-input first:rounded-t-md last:rounded-b-md transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
