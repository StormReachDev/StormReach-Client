// Imports:
import { ToggleProps } from '@/types/UI/Toggle';

export default function Toggle({
  id,
  value,
  onChange,
  textColor = 'text-neutral-700',
  disabled = false,
  title = '',
}: ToggleProps) {
  function handleToggle() {
    if (disabled) return;
    onChange?.(!value);
  }

  return (
    <div className="w-full max-w-full space-y-5">
      <div className="flex items-center justify-between space-x-3">
        <label
          htmlFor={id}
          className={`text-xl font-semibold block ${
            textColor === 'text-neutral-700' ? 'text-neutral-800' : 'text-white'
          }`}
        >
          {title}
        </label>

        <button
          type="button"
          onClick={handleToggle}
          disabled={disabled}
          className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-0 focus:ring-offset-0 ${
            value
              ? 'bg-primary border border-transparent'
              : 'bg-input border border-stroke'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <span
            className={`inline-block size-6 transform rounded-full bg-core-white transition-transform duration-200 ${
              value ? 'translate-x-7' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
