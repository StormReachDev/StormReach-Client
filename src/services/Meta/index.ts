// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import {
  AccountStatusResponse,
  PlansResponse,
  UserRoleSummaryResponse,
} from '@/types/Api/Meta';

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

  userRoleSummary: async (): Promise<UserRoleSummaryResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_USER_ROLE_SUMMARY
    );

    return response.data;
  },
};

export default MetaService;
