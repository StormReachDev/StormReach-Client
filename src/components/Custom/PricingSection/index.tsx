// Imports:
import PricingCard from '@/components/Generics/PricingCard';
import Wrapper from '@/components/Generics/Wrapper';
import stormyLanding from '@/constants/Content';

export default function PricingSection() {
  const {
    pricing: { pricingPlans },
  } = stormyLanding;

  return (
    <Wrapper className="max-w-full sm:min-h-[554px] px-5 py-2 sm:px-[60px] sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-neutral-800 rounded-[20px] h-full">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            features={plan.features}
            price={plan.price}
            buttonText={plan.buttonText}
            className="flex flex-col justify-between h-full"
          />
        ))}
      </div>
    </Wrapper>
  );
}
