// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import {
  AppointmentResponse,
  AppointmentsResponse,
  CreateAppointmentRequest,
  DisputesResponse,
} from '@/types/Api/Appointment';
import { GenericResponse } from '@/types/Api/Auth';

const AppointmentService = {
  appointments: async (
    keyword?: string,
    appointmentStatus?: string,
    page?: number,
    limit?: number
  ): Promise<AppointmentsResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_APPOINTMENTS,
      {
        params: {
          keyword: keyword ?? '',
          appointmentStatus: appointmentStatus ?? '',
          page,
          limit,
        },
      }
    );

    return response.data;
  },

  disputes: async (
    keyword?: string,
    appointmentStatus?: string,
    page?: number,
    limit?: number
  ): Promise<DisputesResponse> => {
    const response = await axiosInstance.get(API_ABSOLUTE_ROUTES.GET_DISPUTES, {
      params: {
        keyword: keyword ?? '',
        appointmentStatus: appointmentStatus ?? '',
        page,
        limit,
      },
    });

    return response.data;
  },

  createAppointment: async (
    data: CreateAppointmentRequest
  ): Promise<GenericResponse> => {
    const response = await axiosInstance.post(
      API_ABSOLUTE_ROUTES.CREATE_APPOINTMENT,
      data
    );

    return response.data;
  },

  deleteAppointment: async (id: string): Promise<void> => {
    await axiosInstance.delete(`${API_ABSOLUTE_ROUTES.APPOINTMENT}/${id}`);
  },

  getAppointment: async (id: string): Promise<AppointmentResponse> => {
    const response = await axiosInstance.get(
      `${API_ABSOLUTE_ROUTES.APPOINTMENT}/${id}`
    );

    return response.data;
  },

  updateAppointment: async (
    id: string,
    data: FormData
  ): Promise<GenericResponse> => {
    const response = await axiosInstance.put(
      `${API_ABSOLUTE_ROUTES.APPOINTMENT}/${id}`,
      data
    );

    return response.data;
  },
};

export default AppointmentService;
