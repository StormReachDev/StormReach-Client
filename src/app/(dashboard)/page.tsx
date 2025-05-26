// Imports:
import { CarouselCustomNavigation } from '@/components/Custom/Carousel';
import SplitScreen from '@/components/Custom/SplitScreen';
import Wrapper from '@/components/Generics/Wrapper';
import LoginForm from '@/components/UI/Forms/Login';
import DashboardLayout from '@/layouts/DashboardLayout';

export default function Page() {
  return (
    <DashboardLayout>
      <Wrapper className="max-w-full size-full py-[92px] px-[70px]">
        <SplitScreen
          className="gap-[70px]"
          left={<CarouselCustomNavigation />}
          right={<LoginForm />}
        />
      </Wrapper>
    </DashboardLayout>
  );
}
