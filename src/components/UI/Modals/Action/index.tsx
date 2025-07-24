// Imports:
import { cn } from '@/lib/utils';
import { useModalStore } from '@/stores/useModalStore';
import { useTableStore } from '@/stores/useTableStore';
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from '@material-tailwind/react';
import { LucideIcon } from 'lucide-react';
import ButtonSpinner from '../../ButtonSpinner';
import IconBadge from '../../IconBadge';

export default function ActionModal({
  icon,
  iconPrimaryClassName,
  iconSecondaryClassName,
  actionHeading = '',
  actionBody = '',
  actionTrigger,
  actionTriggerClassName,
  actionText = '',
  isPending = false,
}: {
  icon?: LucideIcon;
  iconPrimaryClassName?: string;
  iconSecondaryClassName?: string;
  actionHeading?: string;
  actionBody?: string;
  actionTrigger?: () => void;
  actionTriggerClassName?: string;
  actionText?: string;
  isPending?: boolean;
}) {
  const { modal, closeModal } = useModalStore();
  const { setId } = useTableStore();

  if (
    modal !== 'ActionModal' &&
    modal !== 'ResolveDispute' &&
    modal !== 'DenyDispute'
  )
    return null;

  function closeHandler() {
    setId('');
    closeModal();
  }

  return (
    <>
      <Dialog
        open={!!modal}
        handler={closeModal}
        className="w-full outline-none rounded-[20px] border border-stroke bg-input py-8 px-6 space-y-8"
        size="md"
      >
        <DialogHeader className="overflow-hidden p-0 space-y-5 flex flex-col items-start">
          <IconBadge
            icon={icon}
            className={cn(
              'size-12 p-3 rounded-[10px] border-transparent',
              iconPrimaryClassName
            )}
            iconClassName={cn('text-red-800 size-7', iconSecondaryClassName)}
          />

          <div className="flex flex-col items-start gap-3">
            <Typography
              variant="lead"
              className="text-3xl font-semibold text-neutral-800"
            >
              {actionHeading}
            </Typography>

            <Typography
              variant="small"
              className="text-2xl font-medium text-neutral-600"
            >
              {actionBody}
            </Typography>
          </div>
        </DialogHeader>
        <DialogBody className="p-0 flex flex-col gap-4 overflow-hidden">
          <Button
            className={cn(
              'flex-1 py-3 px-5 text-core-white bg-primary capitalize text-xl font-semibold rounded-xl outline-none',
              actionTriggerClassName
            )}
            onClick={actionTrigger}
            type="button"
          >
            {isPending ? <ButtonSpinner /> : actionText}
          </Button>

          <Button
            className="flex-1 py-3 px-5 text-neutral-800 bg-stroke border border-stroke capitalize text-xl font-semibold rounded-xl outline-0"
            onClick={closeHandler}
            type="button"
          >
            Cancel
          </Button>
        </DialogBody>
      </Dialog>
    </>
  );
}
