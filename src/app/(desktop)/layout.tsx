// Imports:
import MobileComingSoon from '@/components/Custom/MobileDevNotice';
import Wrapper from '@/components/Generics/Wrapper';
import DashboardLayout from '@/layouts/DashboardLayout';
import ResponsiveLayout from '@/layouts/ResponsiveLayout';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardLayout>
      <ResponsiveLayout
        mobileComponent={
          // TODO: The padding is half of the desktop layout.
          <Wrapper className="max-w-full size-full py-[46px] px-[35px] place-content-center">
            <MobileComingSoon />
          </Wrapper>
        }
      >
        {children}
      </ResponsiveLayout>
    </DashboardLayout>
  );
}
