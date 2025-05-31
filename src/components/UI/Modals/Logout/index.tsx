// Imports:
import stormyContent from '@/constants/Content';
import { imagePaths } from '@/constants/Paths/Images';
import { useLogout } from '@/hooks/auth';
import { useModalStore } from '@/stores/useModalStore';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from '@material-tailwind/react';
import ButtonSpinner from '../../ButtonSpinner';
import BaseImage from '../../Image';

export default function LogoutModal() {
  const { modal, closeModal } = useModalStore();
  const { mutate: logout, isPending } = useLogout();

  if (modal !== 'Logout') return null;

  function logoutHandler() {
    logout();
    closeModal();
  }

  return (
    <Dialog
      open={!!modal}
      handler={closeModal}
      className="max-w-[880px] w-full outline-none rounded-[20px] border border-stroke bg-input p-10 space-y-10"
    >
      <DialogHeader className="overflow-hidden p-0">
        <BaseImage
          src={imagePaths.modal.logout.src}
          alt={imagePaths.modal.logout.alt}
          className="object-cover size-full w-auto mx-auto"
        />
      </DialogHeader>
      <DialogBody className="text-center space-y-3 overflow-hidden p-0">
        <Typography
          variant="lead"
          className="text-3xl font-semibold text-neutral-800"
        >
          {stormyContent.modal.logout.heading}
        </Typography>

        <Typography
          variant="small"
          className="text-neutral-600 text-xl font-medium"
        >
          {stormyContent.modal.logout.body}
        </Typography>
      </DialogBody>

      <DialogFooter className="flex justify-center space-x-4 p-0">
        <Button
          className="flex-1 py-3 px-5 text-primary bg-core-white capitalize text-xl font-semibold rounded-xl outline-0"
          onClick={closeModal}
        >
          {stormyContent.modal.logout.buttons.cancel.text}
        </Button>

        <Button
          className="flex-1 py-3 px-5 text-core-white bg-primary capitalize text-xl font-semibold rounded-xl outline-none"
          onClick={logoutHandler}
          disabled={isPending}
        >
          {isPending ? (
            <ButtonSpinner />
          ) : (
            stormyContent.modal.logout.buttons.confirm.text
          )}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
