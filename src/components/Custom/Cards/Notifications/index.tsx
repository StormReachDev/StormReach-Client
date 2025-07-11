// Imports:
import IconBadge from '@/components/UI/IconBadge';
import Wrapper from '@/components/UI/Wrapper';
import { useDeleteNotification } from '@/hooks/notification';
import { NotificationProps } from '@/types/Custom/Cards';
import { Typography } from '@material-tailwind/react';
import { Bell, Calendar } from 'lucide-react';

export default function NotificationsCard({
  id,
  title = 'New Appointment Scheduled',
  description = 'Homeowner confirmed for Ayaan on 12 May, 2025 at 10:31 PM.',
  date = '20 May, 2025',
}: NotificationProps) {
  const { mutate } = useDeleteNotification();

  function handleDelete() {
    mutate(id);
    return;
  }

  return (
    <Wrapper
      className="bg-stroke border border-stroke rounded-xl p-4 overflow-hidden hover:bg-primary hover:border-primary hover:cursor-pointer transition-colors"
      onClick={handleDelete}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <IconBadge
            icon={Bell}
            className="size-10 px-[10px] py-2 rounded-lg border-transparent"
            iconClassName="text-primary w-5"
          />

          <div className="space-y-1">
            <Typography
              variant="lead"
              className="text-xl font-semibold text-neutral-800"
            >
              {title}
            </Typography>

            <Typography
              variant="small"
              className="text-lg font-normal text-neutral-800"
            >
              {description}
            </Typography>
          </div>
        </div>

        <div className="flex items-center gap-2 text-neutral-600">
          <Calendar className="w-5 h-5" />
          <Typography className="text-sm font-normal whitespace-nowrap">
            {date}
          </Typography>
        </div>
      </div>
    </Wrapper>
  );
}
