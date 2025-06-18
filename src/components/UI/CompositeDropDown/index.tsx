// Imports:
import { cn } from '@/lib/utils';
import { CompositeDropdownProps } from '@/types/UI/DropDown';
import { Checkbox } from '@headlessui/react';
import { Typography } from '@material-tailwind/react';
import { Check, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function CompositeDropdown(props: CompositeDropdownProps) {
  const {
    Icon,
    className = '',
    btnClassName = '',
    textClassName = '',
    triggerClassName = '',
    iconClassName = '',
    optionsClassName = '',
  } = props;

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
          {props.isMulti ? props.text : props.selected}
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
          {props.isMulti
            ? props.options.map((option, index) => {
                const isChecked = props.selectedValues.includes(option);
                return (
                  <div
                    key={index}
                    onClick={() => {
                      if (isChecked) {
                        props.onChange(
                          props.selectedValues.filter((val) => val !== option)
                        );
                      } else {
                        props.onChange([...props.selectedValues, option]);
                      }
                    }}
                    className="flex justify-between items-center px-3 py-2 text-neutral-800 hover:bg-input first:rounded-t-md last:rounded-b-md transition-colors cursor-pointer"
                  >
                    <Typography
                      variant="small"
                      className={cn(
                        'text-neutral-700 text-lg font-medium',
                        props.dropdownContextTextClassName
                      )}
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
                      {isChecked && (
                        <Check className="size-3 text-neutral-800" />
                      )}
                    </Checkbox>
                  </div>
                );
              })
            : Object.keys(props.options).map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    props.onChange(option);
                    setIsOpen(false);
                  }}
                  className="w-full text-left py-2 px-[14px] text-neutral-700 font-medium hover:bg-input first:rounded-t-md last:rounded-b-md transition-colors"
                >
                  {option}
                </button>
              ))}
        </div>
      )}
    </div>
  );
}
