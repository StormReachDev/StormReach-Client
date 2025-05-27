// Imports:
import Image from 'next/image';

export default function BaseImage({
  className,
  src,
  alt,
  width = 500,
  height = 500,
  priority = false,
}: {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
    />
  );
}
