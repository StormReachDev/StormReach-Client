// Imports:
import Metrics from '@/components/Custom/Cards/Metrics';
import Wrapper from '@/components/Generics/Wrapper';
import stormyContent from '@/constants/Content';
import { Typography } from '@material-tailwind/react';

export default function Customers() {
  return (
    <Wrapper className="max-w-full w-full space-y-7">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.admin.dashboard.customers.heading}
      </Typography>

      <div className="flex flex-wrap items-center gap-5 overflow-hidden">
        {stormyContent.admin.dashboard.customers.cards.map((card, index) => (
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
