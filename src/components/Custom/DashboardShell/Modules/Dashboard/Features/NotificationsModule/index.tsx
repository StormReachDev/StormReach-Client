// Imports:
import Notification from '@/components/Custom/Cards/Notifications';
import BreadCrumbs from '@/components/UI/BreadCrumbs';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { useSidebarStore } from '@/stores/useSidebarStore';
import { Typography } from '@material-tailwind/react';
import { ArrowLeft } from 'lucide-react';

export default function NotificationsModule() {
  const { setShowNotifications, activeItem } = useSidebarStore();

  function goBack() {
    setShowNotifications(false);
    return;
  }

  const notifications = [
    {
      title: 'New Appointment Scheduled',
      description: 'Homeowner confirmed for Ayaan on 12 May, 2025 at 10:31 PM.',
      date: '20 May, 2025',
    },
    {
      title: 'Payment Received',
      description:
        'Payment of $250 received from John Smith for service #12345.',
      date: '19 May, 2025',
    },
  ];

  return (
    <>
      <Wrapper className="py-[10px] w-fit overflow-hidden">
        <ArrowLeft
          className="size-6 text-neutral-800 aspect-square shrink-0 hover:text-primary transition-colors"
          onClick={goBack}
        />
      </Wrapper>

      <Wrapper className="max-w-full w-full space-y-7">
        <div className="space-y-1 overflow-hidden">
          <Typography
            variant="lead"
            className="text-neutral-800 font-semibold text-[28px]"
          >
            {stormyContent.admin.dashboard.notifications.heading}
          </Typography>

          <BreadCrumbs
            items={[
              {
                label: activeItem,
                onClick: goBack,
              },
              {
                label: 'Notifications',
                isActive: true,
              },
            ]}
          />
        </div>

        <div className="space-y-5 overflow-hidden">
          {notifications.map((notification, index) => (
            <Notification
              key={index}
              title={notification.title}
              description={notification.description}
              date={notification.date}
            />
          ))}
        </div>
      </Wrapper>
    </>
  );
}
