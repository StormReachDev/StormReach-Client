// Imports:
import { QueryKeys } from '@/constants/Keys';
import queryClient from '@/lib/queryClient';
import RooferService from '@/services/Roofer';
import { AppointmentsResponse } from '@/types/Api/Appointment';
import { APIError, GenericResponse } from '@/types/Api/Auth';
import { RooferResponse, RoofersResponse } from '@/types/Api/Roofer';
import { TransactionsResponse } from '@/types/Api/Transaction';
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
      queryClient.refetchQueries({
        queryKey: [QueryKeys.CUSTOMER_METRICS],
      });
      queryClient.refetchQueries({ queryKey: [QueryKeys.TRANSACTIONS] });
      queryClient.refetchQueries({
        queryKey: [QueryKeys.TRANSACTION_METRICS],
      });
      queryClient.refetchQueries({ queryKey: [QueryKeys.TEAM_MEMBERS] });
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
      queryClient.refetchQueries({ queryKey: [QueryKeys.TEAM_MEMBERS] });
      toast.success('Success! Customer updated successfully.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

function useCustomerAppointments(
  id: string,
  keyword?: string,
  appointmentStatus?: string,
  page?: number,
  limit?: number
) {
  return useQuery<AppointmentsResponse, Error>({
    queryKey: [
      QueryKeys.CUSTOMER_APPOINTMENTS,
      id,
      page,
      limit,
      keyword,
      appointmentStatus,
    ],
    queryFn: () =>
      RooferService.customerAppointments(
        id,
        keyword,
        appointmentStatus,
        page,
        limit
      ),
    enabled: !!id,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useCustomerTransactions(
  id: string,
  keyword?: string,
  transactionType?: string,
  transactionStatus?: string,
  page?: number,
  limit?: number
) {
  return useQuery<TransactionsResponse, Error>({
    queryKey: [
      QueryKeys.CUSTOMER_TRANSACTIONS,
      id,
      keyword,
      transactionType,
      transactionStatus,
      page,
      limit,
    ],
    queryFn: () =>
      RooferService.customerTransactions(
        id,
        keyword,
        transactionType,
        transactionStatus,
        page,
        limit
      ),
    enabled: !!id,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

export {
  useAllRoofers,
  useCustomerAppointments,
  useCustomerTransactions,
  useDeleteRoofer,
  useRoofer,
  useUpdateRoofer,
};
