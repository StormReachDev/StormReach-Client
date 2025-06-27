// Imports:
import Metrics from '@/components/Custom/Cards/Metrics';
import CardSkeleton from '@/components/UI/Skeletons/Card';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { useTransactionMetrics } from '@/hooks/meta';
import { TransactionMetriKeys } from '@/types/Api/Meta';
import { Typography } from '@material-tailwind/react';

export default function Summary() {
  const { data, isLoading } = useTransactionMetrics();
  const transactionMetrics =
    data?.metrics ||
    ({} as Record<
      TransactionMetriKeys,
      { value: number; changePercent: number }
    >);

  const transactionKeyMap: Record<string, TransactionMetriKeys> = {
    'Total Credits Issued': 'totalCreditsIssued',
    'Total Appointment Credits': 'totalAppointmentCredits',
    'Total Dispute Credits': 'totalDisputeCredits',
    'Auto-Reloads Triggered': 'autoReloadsTriggered',
  };

  const updatedCards =
    stormyContent.admin.creditsAndTransactions.summary.cards.map((card) => {
      const transactionKey = transactionKeyMap[card.title];
      const stats = transactionMetrics[transactionKey];

      return {
        ...card,
        value: String(stats?.value),
        percentage: `${stats?.changePercent}%`,
        action: stats?.changePercent < 50 ? 'one' : 'two',
      };
    });

  return (
    <Wrapper className="max-w-full w-full space-y-7">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.admin.creditsAndTransactions.summary.heading}
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
                percentage={card.percentage}
                action={card.action}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                imageClassName={'object-fill'}
                showStatistics
              />
            ))}
      </div>
    </Wrapper>
  );
}
