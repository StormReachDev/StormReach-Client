'use client';

// Imports:
import { CarouselCustomNavigation } from '@/components/Custom/Carousel';
import SplitScreen from '@/components/Custom/SplitScreen';
import Wrapper from '@/components/Generics/Wrapper';
import { useScreenStore } from '@/stores/useScreenStore';
import ForgotPasswordForm from '../Forms/ForgotPassword';
import LoginForm from '../Forms/Login';

export default function ScreenManager() {
  const { currentScreen, setScreen } = useScreenStore();

  const RenderingComponent = function () {
    switch (currentScreen) {
      case 'login':
        return <LoginForm setScreen={setScreen} />;

      case 'forgotPassword':
        return <ForgotPasswordForm setScreen={setScreen} />;

      default:
        console.log('Unknown screen:', currentScreen);
    }
  };

  return (
    <Wrapper className="max-w-full size-full py-[92px] px-[70px]">
      <SplitScreen
        className="gap-[70px]"
        left={<CarouselCustomNavigation />}
        right={<RenderingComponent />}
      />
    </Wrapper>
  );
}
