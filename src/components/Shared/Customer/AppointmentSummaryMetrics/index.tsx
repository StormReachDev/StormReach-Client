// Imports:
import Metrics from '@/components/Custom/Cards/Metrics';
import CardSkeleton from '@/components/UI/Skeletons/Card';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { useMe } from '@/hooks/auth';
import { useCustomerAppointmentMetrics } from '@/hooks/meta';
import { CustomerAppointmentMetricKeys } from '@/types/Api/Meta';
import { Typography } from '@material-tailwind/react';

export default function AppointmentSummaryMetrics({
  heading,
}: {
  heading: string;
}) {
  const { data: userData } = useMe();
  const { data, isLoading } = useCustomerAppointmentMetrics(
    userData?.customer?._id ?? ''
  );
  const customerAppointmentMetrics =
    data?.metrics ||
    ({} as Record<CustomerAppointmentMetricKeys, { value: number }>);

  const customerAppointmentKeyMap: Record<
    string,
    CustomerAppointmentMetricKeys
  > = {
    'Total Credits Remaining': 'totalCreditsIssued',
    'Appointments Completed': 'totalAppointmentsCompleted',
    'Appointments Scheduled': 'totalAppointmentsScheduled',
    'Appointments Disputed': 'totalAppointmentsDisputed',
  };

  const updatedCards = stormyContent.cutomer.dashboard.summary.cards.map(
    (card) => {
      const customerAppointmentKey = customerAppointmentKeyMap[card.title];
      const stats = customerAppointmentMetrics[customerAppointmentKey];

      return {
        ...card,
        value: String(stats?.value),
      };
    }
  );

  return (
    <Wrapper className="max-w-full w-full space-y-7">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {heading}
      </Typography>

      <div className="flex flex-wrap items-center gap-5 overflow-hidden">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          : updatedCards.map((card, index) => (
              <Metrics
                key={index}
                title={card.title}
                value={card.value}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                imageClassName={'object-fill'}
                showStatistics={false}
              />
            ))}
      </div>
    </Wrapper>
  );
}
