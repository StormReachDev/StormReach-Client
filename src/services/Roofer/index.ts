// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import { GenericResponse } from '@/types/Api/Auth';
import { RooferResponse, RoofersResponse } from '@/types/Api/Roofer';
import qs from 'qs';

const RooferService = {
  roofers: async (
    keyword?: string,
    plan?: string,
    accountStatus?: string,
    assignedAgents?: string[],
    page?: number,
    limit?: number
  ): Promise<RoofersResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_ALL_ROOFERS,
      {
        params: {
          keyword: keyword ?? '',
          plan: plan ?? '',
          accountStatus: accountStatus ?? '',
          assignedAgents,
          page,
          limit,
        },
        paramsSerializer: (params) =>
          qs.stringify(params, { arrayFormat: 'repeat' }),
      }
    );

    return response.data;
  },

  roofer: async (id: string): Promise<RooferResponse> => {
    const response = await axiosInstance.get(
      `${API_ABSOLUTE_ROUTES.SINGLE_ROOFER}/${id}`
    );

    return response.data;
  },

  deleteRoofer: async (id: string): Promise<void> => {
    await axiosInstance.delete(`${API_ABSOLUTE_ROUTES.SINGLE_ROOFER}/${id}`);
  },

  updateRoofer: async (
    id: string,
    data: FormData
  ): Promise<GenericResponse> => {
    const response = await axiosInstance.put(
      `${API_ABSOLUTE_ROUTES.SINGLE_ROOFER}/${id}`,
      data
    );
    return response.data;
  },
};

export default RooferService;
