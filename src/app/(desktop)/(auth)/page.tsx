// Imports:
import Spinning from '@/components/Custom/Spinner';
import ScreenManager from '@/components/UI/ScreenManager';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<Spinning />}>
      <ScreenManager />
    </Suspense>
  );
}
