// Imports:
import stormyContent from '@/constants/Content';
import { useChangePassword } from '@/hooks/auth';
import { useModalStore } from '@/stores/useModalStore';
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from '@material-tailwind/react';
import { Lock } from 'lucide-react';
import { useState } from 'react';
import ButtonSpinner from '../../ButtonSpinner';
import FlowIndicator from '../../FlowIndicator';
import InputField from '../../InputField';

export default function ChangePasswordModal() {
  const { modal, closeModal } = useModalStore();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { mutate: changePassword, isPending } = useChangePassword();

  if (modal !== 'ChangePassword') return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    changePassword(
      {
        currentPassword,
        newPassword,
        confirmPassword,
      },

      {
        onSuccess: () => {
          setCurrentPassword('');
          setNewPassword('');
          setConfirmPassword('');
          closeModal();
        },
      }
    );
  }

  return (
    <Dialog
      open={!!modal}
      handler={closeModal}
      className="w-full outline-none rounded-[20px] border border-stroke bg-input p-10 space-y-10"
      size="md"
    >
      <DialogHeader className="overflow-hidden p-0 space-y-2 flex flex-col items-start">
        <Typography
          variant="lead"
          className="text-3xl font-semibold text-neutral-800"
        >
          {stormyContent.modal.changePassword.heading}
        </Typography>
        <FlowIndicator parent="Settings" child="Change Password" />
      </DialogHeader>
      <DialogBody className="overflow-hidden p-0">
        <form className="space-y-7 overflow-hidden" onSubmit={handleSubmit}>
          <InputField
            id={stormyContent.modal.changePassword.form.currentPassword.id}
            label={
              stormyContent.modal.changePassword.form.currentPassword.label
            }
            type="password"
            value={currentPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCurrentPassword(e.target.value)
            }
            icon={<Lock className="h-6 w-6 text-neutral-700" />}
            required
          />

          <InputField
            id={stormyContent.modal.changePassword.form.newPassword.id}
            label={stormyContent.modal.changePassword.form.newPassword.label}
            type="password"
            value={newPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewPassword(e.target.value)
            }
            icon={<Lock className="h-6 w-6 text-neutral-700" />}
            required
          />

          <InputField
            id={stormyContent.modal.changePassword.form.confirmPassword.id}
            label={
              stormyContent.modal.changePassword.form.confirmPassword.label
            }
            type="password"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(e.target.value)
            }
            icon={<Lock className="h-6 w-6 text-neutral-700" />}
            required
          />

          <div className="overflow-hidden max-w-full">
            <Button
              className="p-3 rounded-lg bg-primary text-xl font-semibold text-core-white w-full capitalize"
              type="submit"
              disabled={
                !currentPassword.trim() ||
                !newPassword.trim() ||
                !confirmPassword.trim()
              }
            >
              {isPending ? (
                <ButtonSpinner />
              ) : (
                stormyContent.modal.changePassword.form.submitButton.text
              )}
            </Button>
          </div>
        </form>
      </DialogBody>
    </Dialog>
  );
}
