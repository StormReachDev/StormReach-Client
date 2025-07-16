// Imports:
import BaseImage from '@/components/UI/Image';
import stormyContent from '@/constants/Content';
import { AccountStatusKeys } from '@/constants/Keys';
import { imagePaths } from '@/constants/Paths/Images';
import { useLogout, useMe } from '@/hooks/auth';
import { useModalStore } from '@/stores/useModalStore';
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from '@material-tailwind/react';
import { useEffect } from 'react';

export default function FlaggedAccountModal() {
  const { modal, openModal, closeModal } = useModalStore();
  const { data } = useMe();
  const logout = useLogout();

  useEffect(() => {
    if (data?.user?.status === AccountStatusKeys.flagged.toLowerCase()) {
      openModal('FlagAccount');
    }
  }, [data?.user?.status]);

  if (modal !== 'FlagAccount') return null;

  function mailHandler() {
    window.location.href =
      'mailto:strmreach@gmail.com?subject=Support Request: Account Flagged';
    return;
  }

  function logoutHandler() {
    closeModal();
    logout();
    return;
  }

  return (
    <Dialog
      open={!!modal}
      handler={() => {}}
      className="w-full outline-none rounded-[20px] border border-stroke bg-input p-10 space-y-10"
      size="sm"
    >
      <DialogHeader className="overflow-hidden p-0">
        <BaseImage
          src={imagePaths.modal.account.flagged.src}
          alt={imagePaths.modal.account.flagged.alt}
          className="object-cover size-full w-auto mx-auto"
        />
      </DialogHeader>
      <DialogBody className="text-center space-y-3 overflow-hidden p-0">
        <Typography
          variant="lead"
          className="text-3xl font-semibold text-neutral-800"
        >
          {stormyContent.modal.account.flagged.heading}
        </Typography>

        <Typography
          variant="small"
          className="text-neutral-600 text-xl font-medium"
        >
          {stormyContent.modal.account.flagged.body}
        </Typography>
      </DialogBody>

      <DialogFooter className="flex justify-center flex-col space-y-4 p-0">
        <Button
          className="w-full flex-1 py-3 px-5 text-core-white bg-primary capitalize text-xl font-semibold rounded-xl outline-none"
          onClick={mailHandler}
          type="button"
        >
          {stormyContent.modal.account.flagged.buttons.contactSupport.text}
        </Button>
        <Button
          className="w-full flex-1 py-3 px-5 text-core-white bg-background capitalize text-xl font-semibold rounded-xl outline-none"
          onClick={logoutHandler}
          type="button"
        >
          {stormyContent.modal.account.flagged.buttons.logout.text}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
