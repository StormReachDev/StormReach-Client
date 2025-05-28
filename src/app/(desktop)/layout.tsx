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
      <Wrapper className="max-w-full size-full py-[46px] px-[35px] xl:py-[92px] xl:px-[70px] place-content-center">
        <ResponsiveLayout mobileComponent={<MobileComingSoon />}>
          {children}
        </ResponsiveLayout>
      </Wrapper>
    </DashboardLayout>
  );
}
