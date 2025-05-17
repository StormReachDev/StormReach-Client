// Imports:
import { cn } from '@/lib/utils';

export default function Bullet({ className }: { className?: string }) {
  return <span className={cn('size-3 rounded-full bg-red-600', className)} />;
}
