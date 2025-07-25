// Imports:
import { Appointment } from '@/types/Api/Appointment';
import { Transaction } from '@/types/Api/Transaction';
import { ColumnDef } from '@tanstack/react-table';

export type TableComponentProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData, any>[];
};

// Admin Table Types:
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

export type DisputesTableProps = Pick<
  Appointment,
  'customerUser' | 'appointmentStatus' | 'disputeSubmissionDate'
> & {
  appointmentDetails: string;
  id: string;
  disputeReason?: string;
};

// Roofer Table Types:
export type RooferAppointmentsTableProps = Pick<
  Appointment,
  'homeOwnerName' | 'homeOwnerAddress' | 'appointmentStatus'
> & {
  appointmentDetails: string;
  id: string;
  isDisputed?: boolean;
};

export type RooferBillingsTableProps = Pick<
  Transaction,
  'amount' | 'plan' | 'transactionStatus' | 'transactionType' | 'createdAt'
> & {
  id: string;
  creditsPurchased: number | string;
};
