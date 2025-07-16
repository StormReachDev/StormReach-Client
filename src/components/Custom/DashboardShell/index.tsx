'use client';

// Imports:
import LogoutModal from '@/components/UI/Modals/Logout';
import SplitScreen from '@/components/UI/SplitScreen';
import Wrapper from '@/components/UI/Wrapper';
import { UserRoleKeys } from '@/constants/Keys';
import { useMe } from '@/hooks/auth';
import { useSidebarStore } from '@/stores/useSidebarStore';
import dynamic from 'next/dynamic';
import AuthGate from '../AuthGate';

// General Subcomponents:
const Sidebar = dynamic(() => import('@/components/Custom/Sidebar'));
const AdminNotificationsModule = dynamic(
  () => import('./Modules/Dashboard/Features/NotificationsModule')
);

// Admin Modules:
const AdminDashboardModule = dynamic(() => import('./Modules/Dashboard'));
const AdminCustomersModule = dynamic(() => import('./Modules/Customers'));
const AdminCAndTModule = dynamic(
  () => import('./Modules/CreditsAndTransactions')
);
const AdminDisputesModule = dynamic(() => import('./Modules/Disputes'));
const AdminAppointmentsLogModule = dynamic(
  () => import('./Modules/AppointmentsLog')
);
const AdminTeamManagementModule = dynamic(
  () => import('./Modules/TeamManagement')
);
const SettingsModule = dynamic(() => import('./Modules/Settings'));

// Roofer Modules:
const RooferDashboardModule = dynamic(
  () => import('./RooferModules/Dashboard')
);

const adminComponentMap: Record<string, React.ReactNode> = {
  Dashboard: <AdminDashboardModule />,
  Customers: <AdminCustomersModule />,
  'Credits & Transactions': <AdminCAndTModule />,
  Disputes: <AdminDisputesModule />,
  'Appointments Log': <AdminAppointmentsLogModule />,
  'Team Management': <AdminTeamManagementModule />,
  Settings: <SettingsModule />,
  Notifications: <AdminNotificationsModule />,
};

const rooferComponentMap: Record<string, React.ReactNode> = {
  Dashboard: <RooferDashboardModule />,
};

export default function DashboardShell() {
  const { activeItem } = useSidebarStore();
  const { data } = useMe();
  let authorizedComponentMap: Record<string, React.ReactNode> | undefined =
    undefined;

  if (data?.user?.role === UserRoleKeys.admin.toLowerCase()) {
    authorizedComponentMap = adminComponentMap;
  } else if (data?.user?.role === UserRoleKeys.roofer.toLowerCase()) {
    authorizedComponentMap = rooferComponentMap;
  }

  return (
    <AuthGate>
      <Wrapper className="max-w-full w-full">
        <SplitScreen
          right={authorizedComponentMap?.[activeItem]}
          left={<Sidebar />}
          rightClassName="w-[calc(100%-330px)] flex-1 bg-background py-10 px-[35px] space-y-10 overflow-y-auto"
          leftClassName="w-[330px] bg-core-black py-8 px-5 shrink-0"
        />
        <LogoutModal />
      </Wrapper>
    </AuthGate>
  );
}
