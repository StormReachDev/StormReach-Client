// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import { TransactionsResponse } from '@/types/Api/Transaction';

const TransactionService = {
  transactions: async (
    keyword?: string,
    transactionType?: string,
    transactionStatus?: string,
    page?: number,
    limit?: number
  ): Promise<TransactionsResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_ALL_TRANSACTIONS,
      {
        params: {
          keyword: keyword ?? '',
          transactionType: transactionType ?? '',
          transactionStatus: transactionStatus ?? '',
          page,
          limit,
        },
      }
    );

    return response.data;
  },

  deleteTransaction: async (id: string): Promise<void> => {
    await axiosInstance.delete(
      `${API_ABSOLUTE_ROUTES.DELETE_TRANSACTION}/${id}`
    );
  },
};

export default TransactionService;
