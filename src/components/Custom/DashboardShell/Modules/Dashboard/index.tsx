// Imports:
import Wrapper from '@/components/Generics/Wrapper';
import stormyContent from '@/constants/Content';
import { useMe } from '@/hooks/auth';
import { Bell } from 'lucide-react';
import Customers from './Features/Customers';
import DisputesAndAppointments from './Features/DisputesAndAppointments';
import Teams from './Features/Teams';
import TimeZoneDisplay from './Features/Timezone';

export default function DashboardModule() {
  const { data } = useMe();

  return (
    <>
      <Wrapper className="max-w-full w-full flex justify-between items-center">
        <TimeZoneDisplay timezone={String(data?.user?.timeZone)} />
        <div
          className="w-[170px] py-[18px] px-4 rounded-[10px] border border-stroke bg-input text-neutral-800 text-lg font-semibold
        flex items-center justify-center gap-x-2 cursor-pointer"
        >
          {stormyContent.admin.dashboard.notifications.heading}
          <Bell
            className="text-neutral-700 w-[18px] animate-bell-ring"
            strokeWidth={3}
          />
        </div>
      </Wrapper>
      <Customers />
      <Teams />
      <DisputesAndAppointments />
    </>
  );
}
