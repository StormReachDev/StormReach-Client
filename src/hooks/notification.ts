// Imports:
import { QueryKeys } from '@/constants/Keys';
import queryClient from '@/lib/queryClient';
import NotificationService from '@/services/Notification';
import { APIError } from '@/types/Api/Auth';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

function useNotifications() {
  return useQuery({
    queryKey: [QueryKeys.NOTIFICATIONS],
    queryFn: NotificationService.getNotifications,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useDeleteNotification() {
  return useMutation({
    mutationFn: (id: string) => NotificationService.deleteNotification(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.NOTIFICATIONS] });
      toast.success('Success! The notification has been deleted successfully.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

export { useDeleteNotification, useNotifications };
