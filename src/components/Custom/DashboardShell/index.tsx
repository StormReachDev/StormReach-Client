'use client';

// Imports:
import Wrapper from '@/components/Generics/Wrapper';
import LogoutModal from '@/components/UI/Modals/Logout';
import SplitScreen from '@/components/UI/SplitScreen';
import { useSidebarStore } from '@/stores/useSidebarStore';
import dynamic from 'next/dynamic';
import AuthGate from '../AuthGate';

// Dynamic imports for modules to reduce initial load time:
const Sidebar = dynamic(() => import('@/components/Custom/Sidebar'));
const DashboardModule = dynamic(() => import('./Modules/Dashboard'));
const CustomersModule = dynamic(() => import('./Modules/Customers'));
const CAndTModule = dynamic(() => import('./Modules/CreditsAndTransactions'));
const DisputesModule = dynamic(() => import('./Modules/Disputes'));
const AppointmentsLogModule = dynamic(
  () => import('./Modules/AppointmentsLog')
);
const TeamManagementModule = dynamic(() => import('./Modules/TeamManagement'));
const SettingsModule = dynamic(() => import('./Modules/Settings'));

const componentMap: Record<string, React.ReactNode> = {
  Dashboard: <DashboardModule />,
  Customers: <CustomersModule />,
  'Credits & Transactions': <CAndTModule />,
  Disputes: <DisputesModule />,
  'Appointments Log': <AppointmentsLogModule />,
  'Team Management': <TeamManagementModule />,
  Settings: <SettingsModule />,
};

export default function DashboardShell() {
  const { activeItem } = useSidebarStore();

  return (
    <AuthGate>
      <Wrapper className="max-w-full w-full">
        <SplitScreen
          right={componentMap[activeItem]}
          left={<Sidebar />}
          rightClassName="w-[calc(100%-330px)] flex-1 bg-background py-10 px-[35px] space-y-10 overflow-y-auto"
          leftClassName="w-[330px] bg-core-black py-8 px-5 shrink-0"
        />
        <LogoutModal />
      </Wrapper>
    </AuthGate>
  );
}
