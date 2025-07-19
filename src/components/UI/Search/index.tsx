// Imports:
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

export default function SearchBar({
  searchWrapperClass = '',
  inputClass = '',
  value = '',
  onChange = () => {},
  placeholder = 'Search by name or email',
}: {
  searchWrapperClass?: string;
  inputClass?: string;
  value?: string;
  onChange?: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  return (
    <div
      className={cn(
        'border border-stroke w-full bg-input rounded-lg py-4 px-[14px]',
        searchWrapperClass
      )}
    >
      <div className="relative flex">
        <Search className="absolute top-1/2 transform -translate-y-1/2 text-neutral-700 size-5" />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(
            'pl-8 focus:outline-none bg-transparent flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-lg text-neutral-400 font-medium',
            inputClass
          )}
          autoComplete="off"
        />
      </div>
    </div>
  );
}
