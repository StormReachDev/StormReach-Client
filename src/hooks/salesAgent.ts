// Imports:
import { QueryKeys } from '@/constants/Keys';
import SalesAgentService from '@/services/SalesAgent';
import { SalesAgentsResponse } from '@/types/Api/SalesAgent';
import { useQuery } from '@tanstack/react-query';

function useSalesAgents() {
  return useQuery<SalesAgentsResponse, Error>({
    queryKey: [QueryKeys.SALES_AGENTS],
    queryFn: SalesAgentService.salesAgents,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

export { useSalesAgents };
