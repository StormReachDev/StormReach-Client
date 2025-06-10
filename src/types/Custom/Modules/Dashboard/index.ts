export type TimeZoneDisplayProps = {
  timezone: string;
};

export type DisputeData = {
  handled: number;
  approved: number;
  pending: number;
};

export type AppointmentData = {
  cancelled: number;
  remaining: number;
  completed: number;
};

export type MonthlyData<T> = {
  [key: string]: T;
};
