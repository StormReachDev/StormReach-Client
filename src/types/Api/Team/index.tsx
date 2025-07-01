// Imports:
import { User } from '../Auth';

export type TeamMember = Omit<User, 'disputeFeeAmount'> & {
  assignedCustomers?: string[] | Omit<User, 'disputeFeeAmount' | 'status'>[];
};

export type TeamMemberRequest = Omit<TeamMember, '_id' | 'status'>;

export type TeamMembersResponse = {
  success: boolean;
  members: TeamMember[];
  totalCount?: number;
};

export type TeamMemberResponse = {
  success: boolean;
  member: TeamMember;
};
