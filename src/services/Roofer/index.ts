// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import { AppointmentsResponse } from '@/types/Api/Appointment';
import { GenericResponse } from '@/types/Api/Auth';
import { RooferResponse, RoofersResponse } from '@/types/Api/Roofer';
import { TransactionsResponse } from '@/types/Api/Transaction';
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
          type: 'adminCustomers',
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

  customerAppointments: async (
    id: string,
    keyword?: string,
    appointmentStatus?: string,
    page?: number,
    limit?: number
  ): Promise<AppointmentsResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_CUSTOMER_APPOINTMENTS.replace(':id', id),
      {
        params: {
          keyword: keyword ?? '',
          type: 'rooferAppointments',
          appointmentStatus: appointmentStatus ?? '',
          page,
          limit,
        },
      }
    );

    return response.data;
  },

  customerTransactions: async (
    id: string,
    keyword?: string,
    transactionType?: string,
    transactionStatus?: string,
    page?: number,
    limit?: number
  ): Promise<TransactionsResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_CUSTOMER_TRANSACTIONS.replace(':id', id),
      {
        params: {
          keyword: keyword ?? '',
          type: 'rooferTransactions',
          transactionType: transactionType ?? '',
          transactionStatus: transactionStatus ?? '',
          page,
          limit,
        },
      }
    );

    return response.data;
  },
};

export default RooferService;
