// Imports:
import MetricsCard from '@/components/Custom/Cards/Metrics';
import CardSkeleton from '@/components/UI/Skeletons/Card';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { useAppointmentMetrics } from '@/hooks/meta';
import { AppointmentMetricKeys } from '@/types/Api/Meta';
import { Typography } from '@material-tailwind/react';

export default function Summary() {
  const { data, isLoading } = useAppointmentMetrics();
  const appointmentMetrics =
    data?.metrics || ({} as Record<AppointmentMetricKeys, { value: number }>);

  const AppointmentKeyMap: Record<string, AppointmentMetricKeys> = {
    'Appointments Booked': 'totalAppointmentsBooked',
    'Appointments Completed': 'totalAppointmentsCompleted',
    'Appointments Pending': 'totalAppointmentsPending',
    'Appointments Disputed': 'totalAppointmentsDisputed',
  };

  const updatedCards = stormyContent.admin.appointmentLog.summary.cards.map(
    (card) => {
      const appointmentKey = AppointmentKeyMap[card.title];
      const stats = appointmentMetrics[appointmentKey];

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
        {stormyContent.admin.appointmentLog.summary.heading}
      </Typography>

      <div className="flex flex-wrap items-center gap-5 overflow-hidden">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          : updatedCards.map((card, index) => (
              <MetricsCard
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
