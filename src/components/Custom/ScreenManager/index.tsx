'use client';

// Imports:
import { CarouselCustomNavigation } from '@/components/Custom/Carousel';
import Spinning from '@/components/UI/Spinner';
import SplitScreen from '@/components/UI/SplitScreen';
import { useScreenStore } from '@/stores/useScreenStore';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ForgotPasswordForm from '../Forms/ForgotPassword';
import LoginForm from '../Forms/Login';
import ResetPasswordForm from '../Forms/ResetPassword';

export default function ScreenManager() {
  const { currentScreen, setScreen } = useScreenStore();
  const searchParams = useSearchParams();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const screenParam = searchParams.get('screen');
    const tokenParam = searchParams.get('token');

    if (screenParam === 'resetPassword' && tokenParam) {
      setScreen('resetPassword');
    } else {
      setScreen('login');
    }

    setInitialized(true);
  }, []);

  if (!initialized) return <Spinning />;

  const renderForm = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginForm setScreen={setScreen} />;
      case 'forgotPassword':
        return <ForgotPasswordForm setScreen={setScreen} />;
      case 'resetPassword': {
        const token = searchParams.get('token') ?? '';
        return <ResetPasswordForm token={token} />;
      }
      default:
        return <LoginForm setScreen={setScreen} />;
    }
  };

  return (
    <SplitScreen
      className="gap-[70px] overflow-unset"
      left={<CarouselCustomNavigation />}
      right={renderForm()}
      rightClassName="place-content-center"
    />
  );
}
