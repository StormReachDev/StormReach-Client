// Imports:
import { Screen } from '../SplitScreen';

export type InputFieldProps = {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  value: string | number;
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  required?: boolean;
  disabled?: boolean;
  title?: string;
};

export type FormStateProps = {
  setScreen: (_screen: Screen) => void;
};

export type SelectFieldProps = {
  id: string;
  label: string;
  value: string | string[];
  onChange: (_value: string | string[]) => void;
  options: { label: string; value: string }[];
  icon?: React.ReactNode;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  showLabel?: boolean;
  listBoxClassName?: string;
  isMulti?: boolean;
  fallbackLabel?: string;
  disabled?: boolean;
};
