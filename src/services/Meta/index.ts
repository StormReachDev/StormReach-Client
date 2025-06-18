// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import { AccountStatusResponse, PlansResponse } from '@/types/Api/Meta';

const MetaService = {
  accountStatuses: async (): Promise<AccountStatusResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_ACCOUNT_STATUSES
    );

    return response.data;
  },

  plans: async (): Promise<PlansResponse> => {
    const response = await axiosInstance.get(API_ABSOLUTE_ROUTES.GET_ALL_PLANS);

    return response.data;
  },
};

export default MetaService;
