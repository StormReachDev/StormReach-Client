// Imports:
import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';

export default function ButtonSpinner({ className }: { className?: string }) {
  return (
    <LoaderCircle
      className={cn(
        'inline mx-auto h-6 w-6 animate-spin text-neutral-700',
        className
      )}
    />
  );
}
