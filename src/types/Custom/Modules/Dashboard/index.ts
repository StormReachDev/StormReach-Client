// Imports:
import { LucideIcon } from 'lucide-react';

export type TimeZoneDisplayProps = {
  timezone: string;
};

export type MetricsProps = {
  title: string;
  value: string;
  percentage?: string;
  action?: string;
  icon?: LucideIcon;
  imageSrc?: string;
  imageAlt?: string;
  imageClassName?: string;
  iconClassName?: string;
  iconWrapperClassName?: string;
  showStatistics: boolean;
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

export type ProgressBarProps = {
  label: string;
  value: number;
  maxValue: number;
  color: string;
  bgColor: string;
  textColor?: string;
};
