// Imports:
import AppointmentsFulfilled from '@/components/Custom/Cards/AppointmentsFulfilled';
import DisputesAnalytics from '@/components/Custom/Cards/DisputesAnalytics';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { Typography } from '@material-tailwind/react';

export default function DisputesAndAppointments() {
  return (
    <Wrapper className="max-w-full w-full space-y-7">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.admin.dashboard.disputesAndAppointments.heading}
      </Typography>

      <div className="overflow-hidden flex gap-5">
        <DisputesAnalytics />
        <AppointmentsFulfilled />
      </div>
    </Wrapper>
  );
}
