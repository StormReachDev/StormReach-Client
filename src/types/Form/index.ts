// Imports:
import { Screen } from '../SplitScreen';

export type InputFieldProps = {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  value: string;
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  required?: boolean;
};

export type FormStateProps = {
  setScreen: (_screen: Screen) => void;
};
