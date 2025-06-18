// Imports:
import { User } from '../Auth';

export type Roofer = {
  _id: string;
  user: User;
  assignedAgents: User[];
  plan: string;
  appointmentCredits: number;
  autoReload: boolean;
  onboardedAt: Date | null;
};

export type RoofersResponse = {
  success: boolean;
  roofers: Roofer[];
};
