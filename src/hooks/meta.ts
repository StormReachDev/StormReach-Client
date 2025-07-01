// Imports:
import { QueryKeys } from '@/constants/Keys';
import MetaService from '@/services/Meta';
import { AccountStatusResponse, PlanTypeResponse } from '@/types/Api/Meta';
import { useQuery } from '@tanstack/react-query';

function usePlanTypes() {
  return useQuery<PlanTypeResponse, Error>({
    queryKey: [QueryKeys.PLANS],
    queryFn: MetaService.plans,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useAccountStatuses() {
  return useQuery<AccountStatusResponse, Error>({
    queryKey: [QueryKeys.ACCOUNT_STATUSES],
    queryFn: MetaService.accountStatuses,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useUserRoleSummary() {
  return useQuery({
    queryKey: [QueryKeys.USER_ROLE_SUMMARY],
    queryFn: MetaService.userRoleSummary,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useTransactionTypes() {
  return useQuery({
    queryKey: [QueryKeys.TRANSACTION_TYPES],
    queryFn: MetaService.transactionTypes,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useTransactionStatuses() {
  return useQuery({
    queryKey: [QueryKeys.TRANSACTION_STATUSES],
    queryFn: MetaService.transactionStatuses,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useCustomerMetrics() {
  return useQuery({
    queryKey: [QueryKeys.CUSTOMER_METRICS],
    queryFn: MetaService.customerMetrics,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useTransactionMetrics() {
  return useQuery({
    queryKey: [QueryKeys.TRANSACTION_METRICS],
    queryFn: MetaService.transactionMetrics,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

export {
  useAccountStatuses,
  useCustomerMetrics,
  usePlanTypes,
  useTransactionMetrics,
  useTransactionStatuses,
  useTransactionTypes,
  useUserRoleSummary,
};
