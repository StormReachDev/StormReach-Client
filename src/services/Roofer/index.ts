// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import { RoofersResponse } from '@/types/Api/Roofer';

const RooferService = {
  roofers: async (): Promise<RoofersResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_ALL_ROOFERS
    );

    return response.data;
  },
};

export default RooferService;
