export type PlanRequest = {
  timeZone: string;
  plan: string;
  agents: string[];
  priceId: string | undefined;
  paymentMethodId: string;
  name: string;
  email: string;
  phone: string;
  companyName: string | undefined;
  billingAddress: string;
  zipCode: string;
};
