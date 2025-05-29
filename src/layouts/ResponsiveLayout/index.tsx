'use client';

// Imports:
import { useCountdownStore } from '@/stores/useCountdownStore';
import { useDeviceStore } from '@/stores/useDeviceStore';
import { ResponsiveLayoutProps } from '@/types/Generics/Wrapper';
import { useEffect } from 'react';

export default function ResponsiveLayout({
  children,
  mobileComponent,
}: ResponsiveLayoutProps) {
  const { isMobile, setIsMobile } = useDeviceStore();
  const { startCountdown, stopCountdown } = useCountdownStore();

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1024);
    }

    handleResize();
    startCountdown();
    window.addEventListener('resize', handleResize);

    return function () {
      window.removeEventListener('resize', handleResize);
      stopCountdown();
    };
  }, [setIsMobile, startCountdown, stopCountdown]);

  if (isMobile) {
    return <>{mobileComponent}</>;
  }

  return <>{children}</>;
}
