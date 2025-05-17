// Imports:
import { Button } from '@/components/UI/button';
import IconButtonProps from '@/types/Button';
import { forwardRef, Ref } from 'react';

function IconButtonWrapper(
  props: IconButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  const { leftIcon, rightIcon, children, className, ...rest } = props;
  return (
    <Button ref={ref} className={className} {...rest}>
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </Button>
  );
}

const ButtonWithIcon = forwardRef(IconButtonWrapper);
export default ButtonWithIcon;
