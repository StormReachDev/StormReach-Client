// Imports:
import { cn } from '@/lib/utils';
import { SelectFieldProps } from '@/types/UI/Form';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { Fragment } from 'react';

export default function SelectField({
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
}: SelectFieldProps) {
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

      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>

          <Listbox.Button
            className={cn(
              `w-full text-left pl-12 pr-12 py-3 ${bgColor} border ${borderColor} rounded-xl ${textColor} text-lg font-medium appearance-none
            focus:outline-none focus:${borderColor}`,
              listBoxClassName
            )}
            id={id}
          >
            {options.find((option) => option.value === value)?.label}
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
                  {option.label}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
