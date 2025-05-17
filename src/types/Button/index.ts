// Imports:
import { type ButtonProps } from '@/components/UI/button';

export default interface IconButtonProps extends ButtonProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
