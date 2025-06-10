// Imports:
import Spinner from '@/components/UI/Spinner';
import { ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import { useMe } from '@/hooks/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const { data, isLoading } = useMe();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !data?.user) {
      router.push(ABSOLUTE_ROUTES.ROOT);
    }
  }, [data, isLoading, router]);

  if (isLoading) {
    return <Spinner />;
  }

  return <>{children}</>;
}
