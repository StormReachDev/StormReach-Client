// Imports:
import ScreenManager from '@/components/Custom/ScreenManager';
import Spinning from '@/components/UI/Spinner';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<Spinning />}>
      <ScreenManager />
    </Suspense>
  );
}
