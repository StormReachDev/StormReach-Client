import { Transaction } from '@/types/Api/Transaction';
import { ColumnDef } from '@tanstack/react-table';

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

export type TableComponentProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData, any>[];
};
