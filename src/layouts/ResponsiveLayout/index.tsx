'use client';

// Imports:
import { useDeviceStore } from '@/stores/useDeviceStore';
import { ResponsiveLayoutProps } from '@/types/UI/Wrapper';
import { useEffect } from 'react';

export default function ResponsiveLayout({
  children,
  mobileComponent,
}: ResponsiveLayoutProps) {
  const { isMobile, setIsMobile } = useDeviceStore();

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1024);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsMobile]);

  if (isMobile) {
    return <>{mobileComponent}</>;
  }

  return <>{children}</>;
}
