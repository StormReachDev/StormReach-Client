// Imports:
import { InputFieldProps } from '@/types/UI/Form';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function InputField({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  bgColor = 'bg-input',
  borderColor = 'border-stroke',
  textColor = 'text-neutral-700',
  required = false,
  disabled = false,
  title = '',
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  return (
    <div className="w-full max-w-full space-y-5">
      <label
        htmlFor={id}
        className={`text-xl font-semibold capitalize block ${
          textColor === 'text-neutral-700' ? 'text-neutral-800' : 'text-white'
        }`}
      >
        {label}
      </label>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>

        <input
          id={id}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-12 ${isPassword ? 'pr-12' : 'pr-3'} py-3 ${bgColor} border ${borderColor} rounded-xl ${textColor} text-lg font-medium 
          focus:outline-none focus:${borderColor} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
          autoComplete={'off'}
          required={required}
          disabled={disabled}
          title={title}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? (
              <EyeOff className="h-6 w-6 text-neutral-600" />
            ) : (
              <Eye className="h-6 w-6 text-neutral-600" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
