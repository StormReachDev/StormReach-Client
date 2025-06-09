// Imports:
import NotificationsModule from '@/components/Custom/DashboardShell/Modules/Dashboard/Features/NotificationsModule';
import Header from '@/components/Custom/Header';
import { useSidebarStore } from '@/stores/useSidebarStore';

export default function HeaderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { showNotifications } = useSidebarStore();

  if (showNotifications) {
    return <NotificationsModule />;
  }

  return (
    <>
      <Header />
      {children}
    </>
  );
}
