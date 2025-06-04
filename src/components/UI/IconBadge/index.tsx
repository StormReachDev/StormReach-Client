// Imports:
import { cn } from '@/lib/utils';
import { IconBadgeProps } from '@/types/Icons';
import BaseImage from '../Image';

export default function IconBadge({
  icon: Icon = undefined,
  className,
  iconClassName,
  imageSrc = '',
  imageAlt = '',
  imageClassName,
}: IconBadgeProps) {
  return (
    <div
      className={cn(
        'overflow-hidden size-10 p-2 flex items-center justify-center bg-red-200 rounded-lg border border-red-800',
        className
      )}
    >
      {Icon && <Icon className={cn('text-red-800 size-6', iconClassName)} />}
      {imageSrc && (
        <BaseImage
          src={imageSrc}
          alt={String(imageAlt)}
          className={cn('size-6', imageClassName)}
        />
      )}
    </div>
  );
}
