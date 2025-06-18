// Imports:
import { cn } from '@/lib/utils';
import { SelectFieldProps } from '@/types/UI/Form';
import { Listbox, Transition } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';
import { Fragment } from 'react';

export default function CompositeSelectField({
  id,
  label,
  value,
  onChange,
  options,
  icon,
  bgColor = 'bg-input',
  borderColor = 'border-stroke',
  textColor = 'text-neutral-700',
  showLabel = true,
  listBoxClassName = '',
  isMulti = false,
  fallbackLabel = '',
}: SelectFieldProps) {
  const isSelected = (val: string) =>
    isMulti && Array.isArray(value) ? value.includes(val) : value === val;

  const handleChange = (newValue: string | string[]) => {
    if (isMulti) {
      onChange(Array.isArray(newValue) ? newValue : [newValue]);
    } else {
      onChange(newValue as string);
    }
  };

  const getDisplayText = () => {
    if (isMulti && Array.isArray(value)) {
      const labels = value
        .map((val) => options.find((o) => o.value === val)?.label)
        .filter(Boolean);

      if (labels.length === 0) return fallbackLabel;
      if (labels.length <= 2) return labels.join(', ');
      return `${labels[0]}, +${labels.length - 1} more`;
    }

    return options.find((o) => o.value === value)?.label || fallbackLabel;
  };

  return (
    <div className="w-full max-w-full space-y-5 select-none">
      {showLabel && (
        <label
          htmlFor={id}
          className={`text-xl font-semibold capitalize block ${textColor}`}
        >
          {label}
        </label>
      )}

      <Listbox value={value} onChange={handleChange} multiple={isMulti}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>

          <Listbox.Button
            className={cn(
              `w-full text-left pl-12 pr-12 py-3 ${bgColor} border ${borderColor} rounded-xl ${textColor} text-lg font-medium appearance-none truncate
              focus:outline-none focus:${borderColor}`,
              listBoxClassName
            )}
            id={id}
          >
            {getDisplayText()}
          </Listbox.Button>

          <div className="pointer-events-none absolute inset-y-0 right-0 pr-3 flex items-center">
            <ChevronDown className="w-6 h-6 text-core-white" />
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={`absolute z-10 mt-2 w-full overflow-y-auto max-h-60 scrollbar-hide ${bgColor} border ${borderColor} rounded-xl shadow-lg focus:outline-none`}
            >
              {options.map((option) => (
                <Listbox.Option
                  key={option.value}
                  value={option.value}
                  className={({ active }) =>
                    `cursor-pointer select-none relative px-3 py-2 text-lg ${
                      active
                        ? 'bg-stroke text-neutral-700 first:rounded-t-md last:rounded-b-md'
                        : 'text-neutral-700'
                    }`
                  }
                >
                  <>
                    {option.label}
                    {isSelected(option.value) && (
                      <span className="absolute inset-y-0 right-3 flex items-center">
                        <Check className="w-6 h-6 text-action-two" />
                      </span>
                    )}
                  </>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
