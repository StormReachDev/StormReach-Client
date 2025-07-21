// Imports:
import MetricsCard from '@/components/Custom/Cards/Metrics';
import CardSkeleton from '@/components/UI/Skeletons/Card';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { AppointmentCreditKeys } from '@/constants/Keys';
import { useMe } from '@/hooks/auth';
import { Typography } from '@material-tailwind/react';

export default function Summary() {
  const { data, isLoading } = useMe();
  const currentPlan = data?.customer?.plan ?? '';
  const currentCredits = data?.customer?.appointmentCredits ?? 0;
  const creditsIssued =
    AppointmentCreditKeys[currentPlan as keyof typeof AppointmentCreditKeys];
  const creditsUsed = creditsIssued - currentCredits;

  const billingKeyMap: Record<string, string> = {
    'Current Plan': 'currentPlan',
    'Total Credits Issued': 'totalCreditsIssued',
    'Total Credits Remaining': 'totalCreditsRemaining',
    'Total Credits Used': 'totalCreditsUsed',
  };

  const updatedCards = stormyContent.cutomer.billingsAndPlans.summary.cards.map(
    (card) => {
      const billingKey = billingKeyMap[card.title];
      let value;

      switch (billingKey) {
        case 'currentPlan':
          value = currentPlan;
          break;
        case 'totalCreditsIssued':
          value = String(creditsIssued);
          break;
        case 'totalCreditsRemaining':
          value = String(currentCredits);
          break;
        case 'totalCreditsUsed':
          value = String(creditsUsed);
          break;
        default:
          break;
      }

      return {
        ...card,
        value: String(value),
      };
    }
  );

  return (
    <Wrapper className="max-w-full w-full space-y-7">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.cutomer.billingsAndPlans.summary.heading}
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
