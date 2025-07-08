// Imports:
import MetricsCard from '@/components/Custom/Cards/Metrics';
import CardSkeleton from '@/components/UI/Skeletons/Card';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { useDisputeMetrics } from '@/hooks/meta';
import { DisputeMetricKeys } from '@/types/Api/Meta';
import { Typography } from '@material-tailwind/react';

export default function Summary() {
  const { data, isLoading } = useDisputeMetrics();
  const disputeMetrics =
    data?.metrics || ({} as Record<DisputeMetricKeys, { value: number }>);

  const appointmentKeyMap: Record<string, DisputeMetricKeys> = {
    'Total Disputes': 'totalDisputes',
    'Approved Disputes': 'approvedDisputes',
    'Pending Disputes': 'pendingDisputes',
    'Denied Disputes': 'deniedDisputes',
  };

  const updatedCards = stormyContent.admin.disputes.summary.cards.map(
    (card) => {
      const disputeKey = appointmentKeyMap[card.title];
      const stats = disputeMetrics[disputeKey];

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
        {stormyContent.admin.disputes.summary.heading}
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
