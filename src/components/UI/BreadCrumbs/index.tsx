// Imports:
import { BreadcrumbItem } from '@/types/UI/BreadCrumbs';
import { Breadcrumbs, Typography } from '@material-tailwind/react';
import { Slash } from 'lucide-react';

export default function BreadCrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <Breadcrumbs
      className="bg-transparent p-0 rounded-none text-xl font-medium text-neutral-600"
      separator={<Slash className="size-5 text-neutral-600" />}
    >
      {items.map((item, index) => (
        <Typography
          key={index}
          variant="lead"
          aria-label={item.onClick ? `Navigate to ${item.label}` : undefined}
          className={`
            ${item.onClick ? 'cursor-pointer hover:text-primary transition-colors' : ''}
            ${item.isActive ? 'text-primary' : 'text-neutral-600'}
          `}
          onClick={item.onClick}
        >
          {item.label}
        </Typography>
      ))}
    </Breadcrumbs>
  );
}
