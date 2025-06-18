import PlanService from '@/services/plan';
import { APIError, GenericResponse } from '@/types/Api/Auth';
import { PlanRequest } from '@/types/Api/Plan';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

// Custom Hook to Purchase a Plan:
function usePurchasePlan() {
  return useMutation<GenericResponse, Error, PlanRequest>({
    mutationFn: PlanService.purchasePlan,
    onSuccess: (data) => {
      toast.success(data.message);
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

export { usePurchasePlan };
