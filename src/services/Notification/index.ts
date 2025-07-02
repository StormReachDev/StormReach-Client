// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import { NotificationResponse } from '@/types/Api/Notification';

const NotificationService = {
  getNotifications: async (): Promise<NotificationResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_NOTIFICATIONS
    );
    return response.data;
  },

  deleteNotification: async (id: string): Promise<void> => {
    await axiosInstance.delete(
      `${API_ABSOLUTE_ROUTES.GET_NOTIFICATIONS}/${id}`
    );
  },
};

export default NotificationService;
