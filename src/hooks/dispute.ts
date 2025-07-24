// Imports:
import { QueryKeys } from '@/constants/Keys';
import queryClient from '@/lib/queryClient';
import DisputeService from '@/services/Dispute';
import { APIError, GenericResponse } from '@/types/Api/Auth';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

function useAllDisputes(
  keyword?: string,
  disputeStatus?: string,
  page?: number,
  limit?: number
) {
  return useQuery({
    queryKey: [QueryKeys.DISPUTES, keyword, disputeStatus, page, limit],
    queryFn: () => DisputeService.disputes(keyword, disputeStatus, page, limit),
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useDisputeAction() {
  return useMutation<GenericResponse, Error, { id: string; action: string }>({
    mutationFn: ({ id, action }) => DisputeService.disputeAction(id, action),
    onSuccess: (_, variables) => {
      const { id } = variables;
      queryClient.refetchQueries({ queryKey: [QueryKeys.DISPUTES] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.APPOINTMENTS] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.DISPUTE, id] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.DISPUTE_METRICS] });
      queryClient.refetchQueries({
        queryKey: [QueryKeys.APPOINTMENT_METRICS],
      });
      toast.success('Success! Dispute updated successfully.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

function useDisputeReasons() {
  return useQuery({
    queryKey: [QueryKeys.DISPUTE_REASONS],
    queryFn: () => DisputeService.disputeReasons(),
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

export { useAllDisputes, useDisputeAction, useDisputeReasons };
