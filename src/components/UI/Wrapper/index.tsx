// Imports:
import { cn } from '@/lib/utils';
import WrapperProps from '@/types/UI/Wrapper';

export default function Wrapper({
  className,
  children,
  onClick,
}: WrapperProps) {
  return (
    <div
      className={cn('w-full overflow-hidden container', className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
