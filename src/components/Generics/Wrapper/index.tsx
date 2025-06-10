// Imports:
import { cn } from '@/lib/utils';
import WrapperProps from '@/types/Generics/Wrapper';

export default function Wrapper({ className, children }: WrapperProps) {
  return (
    <div className={cn('w-full overflow-hidden container', className)}>
      {children}
    </div>
  );
}
