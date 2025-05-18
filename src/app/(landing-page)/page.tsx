// Imports:
import Navbar from '@/components/Custom/Navbar';
import Wrapper from '@/components/Generics/Wrapper';
import LandingPageLayout from '@/layouts/LandingPageLayout';

export default function Page() {
  return (
    <LandingPageLayout>
      <Navbar />
      <Wrapper className="px-[60px] w-full overflow-hidden">
        <p>This is a layout to being with.</p>
      </Wrapper>
    </LandingPageLayout>
  );
}
