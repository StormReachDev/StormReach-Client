// Imports:
import { Appointment } from '@/types/Api/Appointment';
import { Transaction } from '@/types/Api/Transaction';
import { ColumnDef } from '@tanstack/react-table';

export type TableComponentProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData, any>[];
};

export type CustomersTableProps = {
  id: string;
  name: string;
  email: string;
  plan: string;
  credits: number;
  accountStatus: 'Active' | 'Paused' | 'Flagged';
  assignedAgents: string[];
};

export type CreditsAndTransactionsTableProps = Omit<Transaction, 'currency'>;

export type TeamMembersTableProps = {
  id: string;
  name: string;
  role: string;
  email: string;
  assignedCustomers: number;
  accountStatus: 'Active' | 'Paused' | 'Flagged';
  appointmentsBooked?: number;
};

export type AppointmentsTableProps = Pick<
  Appointment,
  'customerUser' | 'homeOwnerName' | 'appointmentStatus' | 'bookedByInfo'
> & {
  appointmentDetails: string;
  id: string;
};
