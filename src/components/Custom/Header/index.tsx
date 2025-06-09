// Imports:
import Wrapper from '@/components/Generics/Wrapper';
import stormyContent from '@/constants/Content';
import { useMe } from '@/hooks/auth';
import { useSidebarStore } from '@/stores/useSidebarStore';
import { Bell } from 'lucide-react';
import TimeZoneDisplay from '../DashboardShell/Modules/Dashboard/Features/Timezone';

export default function Header() {
  const { data } = useMe();
  const { setShowNotifications } = useSidebarStore();

  function triggerNotifications() {
    setShowNotifications(true);
    return;
  }

  return (
    <Wrapper className="max-w-full w-full flex justify-between items-center">
      <TimeZoneDisplay timezone={String(data?.user?.timeZone)} />
      <div
        className="w-[170px] py-[18px] px-4 rounded-[10px] border border-stroke bg-input text-neutral-800 text-lg font-semibold
        flex items-center justify-center gap-x-2 cursor-pointer"
        onClick={triggerNotifications}
      >
        {stormyContent.admin.dashboard.notifications.heading}
        <Bell
          className="text-neutral-700 w-[18px] animate-bell-ring hover:text-primary transition-colors"
          strokeWidth={3}
        />
      </div>
    </Wrapper>
  );
}
