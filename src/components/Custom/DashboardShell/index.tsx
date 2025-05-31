'use client';

// Imports:
import Sidebar from '@/components/Custom/Sidebar';
import Wrapper from '@/components/Generics/Wrapper';
import LogoutModal from '@/components/UI/Modals/Logout';
import SplitScreen from '@/components/UI/SplitScreen';
import { useSidebarStore } from '@/stores/useSidebarStore';
import AuthGate from '../AuthGate';
import AppointmentsLogModule from './Modules/AppointmentsLog';
import CAndTModule from './Modules/CreditsAndTransactions';
import CustomersModule from './Modules/Customers';
import DashboardModule from './Modules/Dashboard';
import DisputesModule from './Modules/Disputes';
import SettingsModule from './Modules/Settings';
import TeamManagementModule from './Modules/TeamManagement';

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
          rightClassName="border border-blue-500 w-[1440px] bg-background py-10 px-[35px] overflow-y-auto"
          leftClassName="w-[330px] bg-core-black py-8 px-5 shrink-0"
        />
        <LogoutModal />
      </Wrapper>
    </AuthGate>
  );
}
