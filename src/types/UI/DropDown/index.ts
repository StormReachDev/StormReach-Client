// Imports:
import { AppointmentData, DisputeData } from '@/types/Custom/Modules/Dashboard';
import { LucideIcon } from 'lucide-react';

export type DropDownProps = {
  options: Record<string, DisputeData | AppointmentData | unknown>;
  selected: string;
  onChange: (_option: string) => void;
  Icon?: LucideIcon;
  className?: string;
  btnClassName?: string;
  textClassName?: string;
  triggerClassName?: string;
  iconClassName?: string;
  optionsClassName?: string;
};

export type MultiDropDownProps = {
  label: string;
  options: string[];
  selectedValues: string[];
  onChange: (_values: string[]) => void;
  className?: string;
  btnClassName?: string;
  textClassName?: string;
  triggerClassName?: string;
  iconClassName?: string;
  optionsClassName?: string;
  Icon?: LucideIcon;
};
