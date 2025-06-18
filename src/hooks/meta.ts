// Imports:
import MetaService from '@/services/Meta';
import { AccountStatusResponse, PlansResponse } from '@/types/Api/Meta';
import { useQuery } from '@tanstack/react-query';

// Custom Hook to Fetch All Plans:
function useAllPlans() {
  return useQuery<PlansResponse, Error>({
    queryKey: ['plans'],
    queryFn: MetaService.plans,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

// Custom Hook to Fetch Account Statuses:
function useAccountStatuses() {
  return useQuery<AccountStatusResponse, Error>({
    queryKey: ['account-statuses'],
    queryFn: MetaService.accountStatuses,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

export { useAccountStatuses, useAllPlans };
