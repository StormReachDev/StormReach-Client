// Imports:
import IconBadge from '@/components/UI/IconBadge';
import { MetricsProps } from '@/types/Custom/Cards';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from '@material-tailwind/react';

export default function MetricsCard({
  title,
  value,
  percentage,
  action,
  icon = undefined,
  imageSrc = '',
  imageAlt = '',
  showStatistics = false,
  imageClassName = '',
  iconClassName = '',
  iconWrapperClassName = '',
}: MetricsProps) {
  return (
    <Card className="bg-input border border-stroke rounded-xl p-5 flex-1 basis-[245px] max-w-full overflow-hidden space-y-4">
      <CardHeader className="overflow-hidden bg-transparent m-0 flex items-center gap-x-1 rounded-none shadow-none">
        <IconBadge
          icon={icon}
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          imageClassName={imageClassName}
          iconClassName={iconClassName}
          className={iconWrapperClassName}
        />

        {showStatistics && (
          <div className="flex flex-1 items-center justify-end gap-x-1 overflow-hidden">
            <Typography
              variant="small"
              className={`text-base font-medium text-action-two ${action === 'one' ? 'text-action-one' : 'text-action-two'}`}
            >
              {percentage}
            </Typography>

            <Typography
              variant="small"
              className="text-base font-medium text-neutral-600"
            >
              vs Last Month
            </Typography>
          </div>
        )}
      </CardHeader>

      <CardBody className="overflow-hidden p-0 space-y-1">
        <Typography
          variant="small"
          className="text-base font-medium text-neutral-700"
        >
          {title}
        </Typography>

        <Typography
          variant="lead"
          className="text-[32px] font-medium text-neutral-800"
        >
          {value}
        </Typography>
      </CardBody>
    </Card>
  );
}
