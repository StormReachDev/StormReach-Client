'use client';

// Imports:
import { CarouselCustomNavigation } from '@/components/Custom/Carousel';
import Spinning from '@/components/Custom/Spinner';
import SplitScreen from '@/components/Custom/SplitScreen';
import { useScreenStore } from '@/stores/useScreenStore';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ForgotPasswordForm from '../Forms/ForgotPassword';
import LoginForm from '../Forms/Login';
import ResetPasswordForm from '../Forms/ResetPassword';

export default function ScreenManager() {
  const { currentScreen, setScreen } = useScreenStore();
  const [initialized, setInitialized] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get('token') ?? '';

  useEffect(() => {
    const screenParam = searchParams.get('screen');
    const tokenParam = searchParams.get('token');

    if (screenParam === 'resetPassword' && tokenParam) {
      setScreen('resetPassword');
    } else {
      setScreen('login');
    }

    setInitialized(true);
  }, [searchParams, setScreen]);

  if (!initialized) return <Spinning />;

  const RenderingComponent = function () {
    switch (currentScreen) {
      case 'login':
        return <LoginForm setScreen={setScreen} />;

      case 'forgotPassword':
        return <ForgotPasswordForm setScreen={setScreen} />;

      case 'resetPassword':
        return <ResetPasswordForm token={token} />;

      default:
        return <LoginForm setScreen={setScreen} />;
    }
  };

  return (
    <SplitScreen
      className="gap-[70px]"
      left={<CarouselCustomNavigation />}
      right={<RenderingComponent />}
    />
  );
}
