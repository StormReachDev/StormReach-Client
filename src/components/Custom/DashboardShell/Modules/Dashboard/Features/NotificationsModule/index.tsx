// Imports:
import Notification from '@/components/Custom/Cards/Notifications';
import BreadCrumbs from '@/components/UI/BreadCrumbs';
import NotificationsCardSkeleton from '@/components/UI/Skeletons/Notification';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { useNotifications } from '@/hooks/notification';
import { useSidebarStore } from '@/stores/useSidebarStore';
import { Typography } from '@material-tailwind/react';
import { format } from 'date-fns-tz';
import { ArrowLeft } from 'lucide-react';

export default function NotificationsModule() {
  const { setShowNotifications, activeItem } = useSidebarStore();
  const { data, isLoading } = useNotifications();

  function goBack() {
    setShowNotifications(false);
    return;
  }

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
          {isLoading ? (
            <NotificationsCardSkeleton />
          ) : (
            data &&
            data?.notifications.length > 0 &&
            data.notifications.map((notification, index) => {
              const formattedDate = format(
                notification.createdAt,
                'EEEE, MMMM d'
              );

              return (
                <Notification
                  key={index}
                  id={notification._id}
                  title={notification.content.heading}
                  description={notification.content.message}
                  date={formattedDate}
                />
              );
            })
          )}

          {!isLoading && data?.notifications.length === 0 && (
            <Typography
              variant="lead"
              className="text-neutral-800 font-semibold text-[28px] text-center"
            >
              {stormyContent.admin.dashboard.notifications.message}
            </Typography>
          )}
        </div>
      </Wrapper>
    </>
  );
}
