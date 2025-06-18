// Imports:
import SalesAgentService from '@/services/SalesAgent';
import { SalesAgentsResponse } from '@/types/Api/SalesAgent';
import { useQuery } from '@tanstack/react-query';

// Custom Hook to Fetch All Sales Agents:
function useSalesAgents() {
  return useQuery<SalesAgentsResponse, Error>({
    queryKey: ['sales-agents'],
    queryFn: SalesAgentService.salesAgents,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

export { useSalesAgents };
