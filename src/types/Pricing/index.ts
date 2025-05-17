type PricingPlan = {
  title: string;
  features: string[];
  setupFee?: string;
  price: string;
  buttonText: string;
};

export interface PricingCardProps extends PricingPlan {
  className?: string;
}

export default PricingPlan;
