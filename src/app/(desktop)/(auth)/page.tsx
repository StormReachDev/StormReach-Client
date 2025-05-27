// Imports:
import Spinning from '@/components/Custom/Spinner';
import ScreenManager from '@/components/UI/ScreenManager';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Suspense } from 'react';

export default function Page() {
  return (
    <DashboardLayout>
      <Suspense fallback={<Spinning />}>
        <ScreenManager />
      </Suspense>
    </DashboardLayout>
  );
}
