export type InputFieldProps = {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
};
