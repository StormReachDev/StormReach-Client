// Imports:
import { cn } from '@/lib/utils';

export default function DashboardLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn('min-h-screen overflow-hidden', className)}>
      {children}
    </main>
  );
}
