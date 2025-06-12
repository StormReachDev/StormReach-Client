// Imports:
import { cn } from '@/lib/utils';
import { MultiDropDownProps } from '@/types/UI/DropDown';
import { Checkbox } from '@headlessui/react';
import { Typography } from '@material-tailwind/react';
import { Check, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function MultiDropDown({
  label,
  options,
  selectedValues,
  onChange,
  className = '',
  btnClassName = '',
  textClassName = '',
  triggerClassName = '',
  iconClassName = '',
  Icon,
  optionsClassName = '',
}: MultiDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function toggleOption(option: string) {
    if (selectedValues.includes(option)) {
      onChange(selectedValues.filter((value) => value !== option));
    } else {
      onChange([...selectedValues, option]);
    }
  }

  return (
    <div className={cn('relative select-none', className)} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'bg-red-200 text-red-800 p-2 rounded-md flex items-center gap-2',
          btnClassName
        )}
      >
        {Icon && <Icon className={iconClassName} />}

        <Typography
          variant="small"
          className={cn('font-semibold text-xs', textClassName)}
        >
          {label}
        </Typography>
        <ChevronDown
          className={cn(
            `size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`,
            triggerClassName
          )}
        />
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute top-full right-0 mt-2 bg-stroke rounded-md border border-stroke z-10 min-w-[140px]',
            optionsClassName
          )}
        >
          {options.map((option, index) => {
            const isChecked = selectedValues.includes(option);

            return (
              <div
                key={index}
                onClick={() => toggleOption(option)}
                className="flex justify-between items-center px-3 py-2 text-neutral-800 hover:bg-input first:rounded-t-md last:rounded-b-md transition-colors cursor-pointer"
              >
                <Typography
                  variant="small"
                  className="text-neutral-700 text-lg font-medium"
                >
                  {option}
                </Typography>

                <Checkbox
                  checked={isChecked}
                  className={cn(
                    'text-neutral-700 size-[18px] rounded-sm border-2 border-neutral-800 flex items-center justify-center',
                    isChecked ? 'bg-primary' : 'bg-transparent'
                  )}
                >
                  {isChecked && <Check className="size-3 text-neutral-800" />}
                </Checkbox>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
