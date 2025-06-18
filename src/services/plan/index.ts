// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import { GenericResponse } from '@/types/Api/Auth';
import { PlanRequest } from '@/types/Api/Plan';

const PlanService = {
  purchasePlan: async (data: PlanRequest) => {
    const response = await axiosInstance.post<GenericResponse>(
      API_ABSOLUTE_ROUTES.PURCHASE_PLAN,
      { data }
    );
    return response.data;
  },
};

export default PlanService;
