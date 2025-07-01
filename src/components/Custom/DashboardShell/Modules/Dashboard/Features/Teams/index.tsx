// Imports:
import Metrics from '@/components/Custom/Cards/Metrics';
import CardSkeleton from '@/components/UI/Skeletons/Card';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { useUserRoleSummary } from '@/hooks/meta';
import { Typography } from '@material-tailwind/react';

export default function Teams() {
  const { data, isLoading } = useUserRoleSummary();
  const roleCounts = data?.roleCounts || {};

  const roleKeyMap: Record<string, keyof typeof roleCounts> = {
    'Active Telemarketers': 'telemarketer',
    'Active Sales Agents': 'salesAgent',
    'Active Managers': 'manager',
    'Active Admins': 'admin',
  };

  const updatedCards = stormyContent.admin.dashboard.teams.cards.map((card) => {
    const roleKey = roleKeyMap[card.title];
    return {
      ...card,
      value: String(roleCounts[roleKey]),
    };
  });

  return (
    <Wrapper className="max-w-full w-full space-y-7">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.admin.dashboard.teams.heading}
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
                showStatistics={false}
                imageClassName="object-fill"
              />
            ))}
      </div>
    </Wrapper>
  );
}
