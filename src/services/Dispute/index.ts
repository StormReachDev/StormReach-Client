// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import { DisputesResponse } from '@/types/Api/Appointment';
import { GenericResponse } from '@/types/Api/Auth';

const DisputeService = {
  disputes: async (
    keyword?: string,
    disputeStatus?: string,
    page?: number,
    limit?: number
  ): Promise<DisputesResponse> => {
    const response = await axiosInstance.get(API_ABSOLUTE_ROUTES.GET_DISPUTES, {
      params: {
        keyword: keyword ?? '',
        type: 'adminDisputes',
        disputeStatus: disputeStatus ?? '',
        page,
        limit,
      },
    });

    return response.data;
  },

  disputeAction: async (
    id: string,
    action: string
  ): Promise<GenericResponse> => {
    const response = await axiosInstance.put(
      `${API_ABSOLUTE_ROUTES.DISPUTE}/${id}`,
      { action }
    );

    return response.data;
  },
};

export default DisputeService;
