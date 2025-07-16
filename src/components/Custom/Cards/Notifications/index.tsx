// Imports:
import IconBadge from '@/components/UI/IconBadge';
import Wrapper from '@/components/UI/Wrapper';
import { useDeleteNotification } from '@/hooks/notification';
import { NotificationProps } from '@/types/Custom/Cards';
import { Button, Typography } from '@material-tailwind/react';
import { Bell, Calendar, X } from 'lucide-react';
import { useState } from 'react';

export default function NotificationsCard({
  id,
  title = 'New Appointment Scheduled',
  description = 'Homeowner confirmed for Ayaan on 12 May, 2025 at 10:31 PM.',
  date = '20 May, 2025',
}: NotificationProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { mutate } = useDeleteNotification();

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    mutate(id);
    return;
  }

  return (
    <Wrapper
      className="bg-stroke border border-stroke rounded-xl p-4 overflow-hidden cursor-pointer transition-all relative duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        onClick={handleDelete}
        className={`absolute top-3 right-3 p-0 bg-transparent rounded transition-all duration-200 ${
          isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        ripple={false}
      >
        <X className="size-4 text-neutral-700" />
      </Button>
      <div className="flex items-start">
        <div className="flex items-center gap-4 flex-1">
          <IconBadge
            icon={Bell}
            className="size-10 px-[10px] py-2 rounded-lg border-transparent"
            iconClassName="text-primary w-5"
          />
          <div className="space-y-1 overflow-hidden">
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

          <div className="flex items-center gap-2 text-neutral-600 ml-auto">
            <Calendar className="w-5 h-5" />
            <Typography className="text-sm font-normal whitespace-nowrap">
              {date}
            </Typography>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
