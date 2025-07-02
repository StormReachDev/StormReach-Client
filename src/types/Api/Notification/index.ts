type NotificationContent = {
  heading: string;
  message: string;
};

export type Notification = {
  _id: string;
  type: string;
  content: NotificationContent;
  createdAt: Date;
};

export type NotificationResponse = {
  sucess: boolean;
  notifications: Notification[];
};
