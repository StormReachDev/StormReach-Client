// Imports:
import { QueryKeys } from '@/constants/Keys';
import queryClient from '@/lib/queryClient';
import RooferService from '@/services/Roofer';
import { APIError, GenericResponse } from '@/types/Api/Auth';
import { RooferResponse, RoofersResponse } from '@/types/Api/Roofer';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

function useAllRoofers(
  keyword?: string,
  plan?: string,
  accountStatus?: string,
  assignedAgents?: string[],
  page?: number,
  limit?: number
) {
  return useQuery<RoofersResponse, Error>({
    queryKey: [
      QueryKeys.ROOFERS,
      keyword,
      plan,
      accountStatus,
      assignedAgents,
      page,
      limit,
    ],
    queryFn: () =>
      RooferService.roofers(
        keyword,
        plan,
        accountStatus,
        assignedAgents,
        page,
        limit
      ),
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useRoofer(id: string) {
  return useQuery<RooferResponse, Error>({
    queryKey: [QueryKeys.ROOFER, id],
    queryFn: ({ queryKey }) => RooferService.roofer(queryKey[1] as string),
    enabled: !!id,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useDeleteRoofer() {
  return useMutation({
    mutationFn: (id: string) => RooferService.deleteRoofer(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.ROOFERS] });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.CUSTOMER_METRICS],
      });
      queryClient.refetchQueries({ queryKey: [QueryKeys.TRANSACTIONS] });
      queryClient.refetchQueries({
        queryKey: [QueryKeys.TRANSACTION_METRICS],
      });
      toast.success('Success! Customer has been deleted successfully.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

function useUpdateRoofer() {
  return useMutation<GenericResponse, Error, { id: string; data: FormData }>({
    mutationFn: ({ id, data }) => RooferService.updateRoofer(id, data),

    onSuccess: (_, variables) => {
      const { id } = variables;

      queryClient.invalidateQueries({ queryKey: [QueryKeys.ROOFERS] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.ROOFER, id] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.CUSTOMER_METRICS] });
      toast.success('Success! Customer updated successfully.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

export { useAllRoofers, useDeleteRoofer, useRoofer, useUpdateRoofer };
