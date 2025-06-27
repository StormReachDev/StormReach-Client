// Imports:
import { QueryKeys } from '@/constants/Keys';
import queryClient from '@/lib/queryClient';
import PlanService from '@/services/plan';
import { APIError, GenericResponse } from '@/types/Api/Auth';
import { PlanRequest } from '@/types/Api/Plan';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

function usePurchasePlan() {
  return useMutation<GenericResponse, Error, PlanRequest>({
    mutationFn: PlanService.purchasePlan,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.ROOFERS] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.CUSTOMER_METRICS] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.TRANSACTIONS] });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.TRANSACTION_METRICS],
      });
      toast.success(data.message);
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

export { usePurchasePlan };
