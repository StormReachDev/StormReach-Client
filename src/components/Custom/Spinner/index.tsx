'use client';

// Imports:
import { cn } from '@/lib/utils';
import { Spinner } from '@material-tailwind/react';

export default function Spinning({ className }: { className?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Spinner className={cn('size-20 text-primary', className)} />
    </div>
  );
}
