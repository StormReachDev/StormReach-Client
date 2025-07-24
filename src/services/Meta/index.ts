// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import {
  AccountStatusResponse,
  ActiveLeaksResponse,
  AppointmentMetricsResponse,
  AppointmentsPerDayResponse,
  AppointmentStatusResponse,
  CustomerAppointmentMetricsResponse,
  CustomerMetricsResponse,
  DisputeMetricsResponse,
  PlanTypeResponse,
  TransactionMetricsResponse,
  TransactionStatusResponse,
  TransactionTypeResponse,
  UserRoleResponse,
  UserRoleSummaryResponse,
} from '@/types/Api/Meta';

const MetaService = {
  accountStatuses: async (): Promise<AccountStatusResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_ACCOUNT_STATUSES
    );

    return response.data;
  },

  plans: async (): Promise<PlanTypeResponse> => {
    const response = await axiosInstance.get(API_ABSOLUTE_ROUTES.GET_PLANS);

    return response.data;
  },

  userRoleSummary: async (): Promise<UserRoleSummaryResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_USER_ROLE_SUMMARY
    );

    return response.data;
  },

  transactionTypes: async (): Promise<TransactionTypeResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_TRANSACTION_TYPES
    );

    return response.data;
  },

  transactionStatuses: async (): Promise<TransactionStatusResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_TRANSACTION_STATUSES
    );

    return response.data;
  },

  customerMetrics: async (): Promise<CustomerMetricsResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_CUSTOMER_METRICS
    );

    return response.data;
  },

  transactionMetrics: async (): Promise<TransactionMetricsResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_TRANSACTION_METRICS
    );

    return response.data;
  },

  roles: async (): Promise<UserRoleResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_USER_ROLES
    );
    return response.data;
  },

  appointmentMetrics: async (): Promise<AppointmentMetricsResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_APPOINTMENT_METRICS
    );

    return response.data;
  },

  appointmentStatuses: async (): Promise<AppointmentStatusResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_APPOINTMENT_STATUSES
    );

    return response.data;
  },

  activeLeaks: async (): Promise<ActiveLeaksResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_ACTIVE_LEAKS
    );
    return response.data;
  },

  disputeMetrics: async (): Promise<DisputeMetricsResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_DISPUTE_METRICS
    );

    return response.data;
  },

  deleteCloudinaryImage: async (publicId: string): Promise<void> => {
    await axiosInstance.delete(API_ABSOLUTE_ROUTES.CLOUDINARY_IMAGE, {
      data: {
        public_id: publicId,
      },
    });
  },

  getCloudinaryImage: async (publicId: string): Promise<string> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.CLOUDINARY_IMAGE + `?public_id=${publicId}`
    );

    return response.data?.asset?.secure_url;
  },

  appointmentsPerDay: async (): Promise<AppointmentsPerDayResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.APPOINTMENTS_PER_DAY
    );

    return response.data;
  },

  customerAppointmentMetrics: async (
    id: string
  ): Promise<CustomerAppointmentMetricsResponse> => {
    const response = await axiosInstance.get(
      `${API_ABSOLUTE_ROUTES.CUSTOMER_APPOINTMENT_METRICS}/${id}`
    );

    return response.data;
  },
};

export default MetaService;
