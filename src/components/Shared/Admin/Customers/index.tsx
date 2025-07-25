// Imports:
import Metrics from '@/components/Custom/Cards/Metrics';
import CardSkeleton from '@/components/UI/Skeletons/Card';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { useCustomerMetrics } from '@/hooks/meta';
import { CustomerMetricKeys } from '@/types/Api/Meta';
import { Typography } from '@material-tailwind/react';

export default function Customers({ heading }: { heading?: string }) {
  const { data, isLoading } = useCustomerMetrics();
  const customerMetrics =
    data?.metrics || ({} as Record<CustomerMetricKeys, { value: number }>);

  const customerKeyMap: Record<string, CustomerMetricKeys> = {
    'Active Customers': 'activeCustomers',
    'Flagged Customers': 'flaggedCustomers',
    'Paused Accounts': 'pausedCustomers',
    'Low Credit Customers': 'lowCreditCustomers',
  };

  const updatedCards = stormyContent.admin.dashboard.customers.cards.map(
    (card) => {
      const customerKey = customerKeyMap[card.title];
      const stats = customerMetrics[customerKey];

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
