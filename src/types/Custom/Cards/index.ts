// Imports:
import { LucideIcon } from 'lucide-react';

export type NotificationProps = {
  id: string;
  title: string;
  description: string;
  date: string;
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
