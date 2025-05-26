// Imports:
import { cn } from '@/lib/utils';
import { SplitScreenProps } from '@/types/SplitScreen';

export default function SplitScreen({
  left,
  right,
  className,
  leftClassName,
  rightClassName,
}: SplitScreenProps) {
  return (
    <div className={cn('flex h-screen w-full overflow-hidden', className)}>
      <div className={cn('w-1/2 h-full', leftClassName)}>{left}</div>
      <div className={cn('w-1/2 h-full', rightClassName)}>{right}</div>
    </div>
  );
}
