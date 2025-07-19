// Imports:
import stormyContent from '@/constants/Content';
import { useFlagAppointment } from '@/hooks/appointment';
import { useDisputeReasons } from '@/hooks/dispute';
import { useModalStore } from '@/stores/useModalStore';
import { useTableStore } from '@/stores/useTableStore';
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from '@material-tailwind/react';
import { OctagonAlert, Target } from 'lucide-react';
import { useState } from 'react';
import ButtonSpinner from '../../ButtonSpinner';
import CompositeSelectField from '../../CompositeSelect';
import IconBadge from '../../IconBadge';

export default function DisputeAppointmentModal() {
  const [disputeReason, setDisputeReason] = useState<string>('');

  const { modal, closeModal } = useModalStore();
  const { setId, selectedId } = useTableStore();
  const { data } = useDisputeReasons();
  const mutation = useFlagAppointment();

  const reasonOptions =
    data?.disputeReasons.map((reason) => ({
      label: reason,
      value: reason,
    })) ?? [];

  if (modal !== 'DisputeAppointment') return null;

  function closeHandler() {
    setId('');
    closeModal();
  }

  function handleDisputeReasonChange(value: string | string[]) {
    if (typeof value === 'string') {
      setDisputeReason(value);
    }
  }

  function handleTrigger(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    mutation.mutate(
      {
        id: String(selectedId),
        disputeReason: disputeReason.trim(),
      },
      {
        onSuccess: () => {
          closeHandler();
        },
      }
    );
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
            icon={OctagonAlert}
            className={'size-12 p-3 rounded-[10px] border-transparent'}
            iconClassName={'text-red-800 size-7'}
          />

          <div className="flex flex-col items-start gap-3">
            <Typography
              variant="lead"
              className="text-3xl font-semibold text-neutral-800"
            >
              {stormyContent.modal.disputeAppointment.heading}
            </Typography>

            <Typography
              variant="small"
              className="text-2xl font-medium text-neutral-600"
            >
              {stormyContent.modal.disputeAppointment.body}
            </Typography>
          </div>
        </DialogHeader>

        <DialogBody className="p-0">
          <form
            className="space-y-7 max-h-[60vh] overflow-y-auto scrollbar-hide"
            onSubmit={handleTrigger}
          >
            <CompositeSelectField
              id={stormyContent.modal.disputeAppointment.form.reason.id}
              label={stormyContent.modal.disputeAppointment.form.reason.label}
              value={disputeReason}
              onChange={handleDisputeReasonChange}
              options={reasonOptions}
              icon={<Target className="h-6 w-6 text-neutral-700" />}
              fallbackLabel={
                stormyContent.modal.disputeAppointment.form.reason.fallbackLabel
              }
            />

            <div className="max-w-full overflow-hidden space-y-4">
              <Button
                className="p-3 rounded-lg bg-primary text-xl font-semibold text-core-white w-full capitalize"
                type="submit"
                disabled={disputeReason === ''}
              >
                {mutation.isPending ? (
                  <ButtonSpinner />
                ) : (
                  stormyContent.modal.disputeAppointment.form.buttons
                    .disputeAppointment.text
                )}
              </Button>

              <Button
                className="p-3 rounded-lg text-core-white bg-stroke text-xl font-semibold w-full capitalize"
                type="button"
                onClick={closeHandler}
              >
                {
                  stormyContent.modal.disputeAppointment.form.buttons.cancel
                    .text
                }
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
