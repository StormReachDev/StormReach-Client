// Imports:
import { User } from '../Auth';

export type Roofer = {
  _id: string;
  user: User;
  assignedAgents: User[];
  plan: string;
  appointmentCredits: number;
  autoReload: boolean;
  companyName: string;
  userInfo?: User; // For filtering purposes
  agentsInfo?: User[]; // For filtering purposes
  onboarded?: boolean;
  contactName?: string;
  contactPhone?: string;
  businessAddress?: string;
  billingAddress?: string;
  zipCode?: string;
  latestStripePaymentMethodId?: string;
  stripePriceId?: string;
  stripeCustomerId?: string;
  companyLogo?: {
    public_id: string;
    url: string;
  };
  appointmentsPerDay?: string;
  sameAsBusinessAddress?: boolean;
};

type ApiResponse<T> = {
  success: boolean;
  totalCount?: number;
} & T;

export type RoofersResponse = ApiResponse<{ roofers: Roofer[] }>;
export type RooferResponse = ApiResponse<{
  roofer: {
    customer: Roofer & {
      billingAddress: string;
      zipCode: string;
      plan: string;
    };
    payment: {
      _id: string;
      billingAddress: string;
      zipCode: string;
    };
    transaction: {
      _id: string;
      plan: string;
    };
  };
}>;
