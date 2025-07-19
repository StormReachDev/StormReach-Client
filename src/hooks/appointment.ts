import { QueryKeys } from '@/constants/Keys';
import queryClient from '@/lib/queryClient';
import AppointmentService from '@/services/Appointment';
import {
  AppointmentsResponse,
  CreateAppointmentRequest,
} from '@/types/Api/Appointment';
import { APIError, GenericResponse } from '@/types/Api/Auth';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

function useAllAppointments(
  keyword?: string,
  appointmentStatus?: string,
  page?: number,
  limit?: number
) {
  return useQuery<AppointmentsResponse, Error>({
    queryKey: [QueryKeys.APPOINTMENTS, keyword, appointmentStatus, page, limit],
    queryFn: () =>
      AppointmentService.appointments(keyword, appointmentStatus, page, limit),
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useCreateAppointment() {
  return useMutation<GenericResponse, Error, CreateAppointmentRequest>({
    mutationFn: AppointmentService.createAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.APPOINTMENTS] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.APPOINTMENT_METRICS] });
      toast.success('Appointment created successfully.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

function useDeleteAppointment() {
  return useMutation({
    mutationFn: (id: string) => AppointmentService.deleteAppointment(id),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: [QueryKeys.APPOINTMENTS] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.DISPUTES] });
      queryClient.refetchQueries({
        queryKey: [QueryKeys.APPOINTMENT_METRICS],
      });
      queryClient.refetchQueries({ queryKey: [QueryKeys.DISPUTE_METRICS] });
      toast.success('Success! Appointment has been deleted successfully.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

function useAppointment(id: string) {
  return useQuery({
    queryKey: [QueryKeys.APPOINTMENT, id],
    queryFn: () => AppointmentService.getAppointment(id),
    enabled: !!id,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useUpdateAppointment() {
  return useMutation<GenericResponse, Error, { id: string; data: FormData }>({
    mutationFn: ({ id, data }) =>
      AppointmentService.updateAppointment(id, data),
    onSuccess: (_, variables) => {
      const { id } = variables;
      queryClient.refetchQueries({ queryKey: [QueryKeys.APPOINTMENTS] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.APPOINTMENT, id] });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.APPOINTMENT_METRICS],
      });
      toast.success('Success! Appointment updated successfully.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

function useFlagAppointment() {
  return useMutation<void, Error, { id: string }>({
    mutationFn: ({ id }) => AppointmentService.flagAppointment(id),
    onSuccess: (_, variables) => {
      const { id } = variables;
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.FLAG_APPOINTMENT, id],
      });
      queryClient.refetchQueries({
        queryKey: [QueryKeys.CUSTOMER_APPOINTMENTS],
      });
      queryClient.refetchQueries({
        queryKey: [QueryKeys.CUSTOMER_APPOINTMENT_METRICS],
      });
      toast.success('Success! Appointment marked as flagged.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

export {
  useAllAppointments,
  useAppointment,
  useCreateAppointment,
  useDeleteAppointment,
  useFlagAppointment,
  useUpdateAppointment,
};
