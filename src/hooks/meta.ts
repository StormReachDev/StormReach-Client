// Imports:
import { QueryKeys } from '@/constants/Keys';
import MetaService from '@/services/Meta';
import { AccountStatusResponse, PlansResponse } from '@/types/Api/Meta';
import { useQuery } from '@tanstack/react-query';

// Custom Hook to Fetch All Plans:
function useAllPlans() {
  return useQuery<PlansResponse, Error>({
    queryKey: [QueryKeys.PLANS],
    queryFn: MetaService.plans,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

// Custom Hook to Fetch Account Statuses:
function useAccountStatuses() {
  return useQuery<AccountStatusResponse, Error>({
    queryKey: [QueryKeys.ACCOUNT_STATUSES],
    queryFn: MetaService.accountStatuses,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

// Custom Hook to Fetch User Role Summary:
function useUserRoleSummary() {
  return useQuery({
    queryKey: [QueryKeys.USER_ROLE_SUMMARY],
    queryFn: MetaService.userRoleSummary,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

export { useAccountStatuses, useAllPlans, useUserRoleSummary };
