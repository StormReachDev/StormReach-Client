// Imports:
import { AppointmentData, DisputeData } from '@/types/Custom/Modules/Dashboard';
import { LucideIcon } from 'lucide-react';

type BaseDropdownProps = {
  Icon?: LucideIcon;
  className?: string;
  btnClassName?: string;
  textClassName?: string;
  triggerClassName?: string;
  iconClassName?: string;
  optionsClassName?: string;
};

type SingleDropdownProps = BaseDropdownProps & {
  isMulti?: false;
  options: Record<string, DisputeData | AppointmentData | unknown>;
  selected: string;
  onChange: (_option: string) => void;
};

type MultiDropdownProps = BaseDropdownProps & {
  isMulti: true;
  text: string;
  options: string[];
  selectedValues: string[];
  onChange: (_values: string[]) => void;
  dropdownContextTextClassName?: string;
};

export type CompositeDropdownProps = SingleDropdownProps | MultiDropdownProps;
