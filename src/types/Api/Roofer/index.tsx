// Imports:
import { User } from '../Auth';

export type Roofer = {
  _id: string;
  userInfo?: User; // For filtering purposes
  agentsInfo?: User[]; // For filtering purposes
  user: User;
  assignedAgents: User[];
  plan: string;
  appointmentCredits: number;
  autoReload: boolean;
  onboardedAt: Date | null;
  companyName: string;
};

type ApiResponse<T> = {
  success: boolean;
  totalCount?: number;
} & T;

export type RoofersResponse = ApiResponse<{ roofers: Roofer[] }>;
export type RooferResponse = ApiResponse<{
  roofer: Roofer & {
    billingAddress: string;
    zipCode: string;
    plan: string;
  };
}>;
