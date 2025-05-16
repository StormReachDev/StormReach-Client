// Imports:
import { cn } from '@/lib/utils';
import { TypographyProps, variantClasses } from '@/types/Typography';

export const Typography = ({
  variant,
  as,
  className,
  children,
  ...props
}: TypographyProps) => {
  const Component = as || variant;
  return (
    <Component className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  );
};
