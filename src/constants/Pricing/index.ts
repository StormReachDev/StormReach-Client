// Imports:
import PricingPlan from '@/types/Pricing';

const pricingPlans: PricingPlan[] = [
  {
    title: 'Pay as you go',
    features: [
      'Perfect for trying us out',
      'No upfront commitment',
      '$199 setup fee',
    ],
    setupFee: '$199 setup fee',
    price: '$200',
    buttonText: 'Get started',
  },
  {
    title: 'Bulk 10 pack',
    features: [
      'Save $50 per appointment',
      'Initial setup fee waived',
      'Appointments auto-delivered',
    ],
    setupFee: 'Initial setup fee waived',
    price: '$150',
    buttonText: 'Grab your bulk 10 pack',
  },
  {
    title: 'Bulk 20 pack',
    features: [
      'Save $75 per appointment',
      'Initial setup fee waived',
      'Ideal for scaling teams',
    ],
    setupFee: 'Initial setup fee waived',
    price: '$125',
    buttonText: 'Book 20 appointments now',
  },
];

export default pricingPlans;
