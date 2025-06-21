// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import { SalesAgentsResponse } from '@/types/Api/SalesAgent';

const SalesAgentService = {
  salesAgents: async (): Promise<SalesAgentsResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_SALES_AGENTS
    );

    return response.data;
  },
};

export default SalesAgentService;
