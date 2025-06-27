// Imports:
import { User } from '../Auth';

export type Transaction = {
  _id: string;
  amount: number;
  currency: string;
  customerUser: Pick<User, 'name'>;
  plan: string;
  transactionStatus: string;
  transactionType: string;
  createdAt: string;
};

export type TransactionsResponse = {
  success: boolean;
  totalCount: number;
  transactions: Transaction[];
};
