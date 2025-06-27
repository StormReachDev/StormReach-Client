// Imports:
import { QueryKeys } from '@/constants/Keys';
import queryClient from '@/lib/queryClient';
import TransactionService from '@/services/Transaction';
import { APIError } from '@/types/Api/Auth';
import { TransactionsResponse } from '@/types/Api/Transaction';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

function useAllTransactions(
  keyword?: string,
  transactionType?: string,
  transactionStatus?: string,
  page?: number,
  limit?: number
) {
  return useQuery<TransactionsResponse, Error>({
    queryKey: [
      QueryKeys.TRANSACTIONS,
      keyword,
      transactionType,
      transactionStatus,
      page,
      limit,
    ],
    queryFn: () =>
      TransactionService.transactions(
        keyword,
        transactionType,
        transactionStatus,
        page,
        limit
      ),
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useDeleteTransaction() {
  return useMutation({
    mutationFn: (id: string) => TransactionService.deleteTransaction(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.TRANSACTIONS] });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.TRANSACTION_METRICS],
      });
      toast.success('Transaction removed successfully.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

export { useAllTransactions, useDeleteTransaction };
