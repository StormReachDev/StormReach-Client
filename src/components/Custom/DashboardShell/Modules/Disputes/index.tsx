// Imports:
import ActionModal from '@/components/UI/Modals/Action';
import stormyContent from '@/constants/Content';
import { useDeleteAppointment } from '@/hooks/appointment';
import { useDisputeAction } from '@/hooks/dispute';
import HeaderLayout from '@/layouts/HeaderLayout';
import { useModalStore } from '@/stores/useModalStore';
import { useTableStore } from '@/stores/useTableStore';
import { Check, X } from 'lucide-react';
import Overview from './Features/Overview';
import Summary from './Features/Summary';

export default function DisputesModule() {
  const actionMutation = useDisputeAction();
  const deleteMutation = useDeleteAppointment();
  const { selectedId, setId } = useTableStore();
  const { modal, closeModal } = useModalStore();

  function resolveDispute() {
    actionMutation.mutate(
      { id: String(selectedId), action: 'resolve' },
      {
        onSuccess: () => {
          closeModal();
          setId('');
        },
      }
    );
  }

  function denyDispute() {
    actionMutation.mutate(
      { id: String(selectedId), action: 'deny' },
      {
        onSuccess: () => {
          closeModal();
          setId('');
        },
      }
    );
  }

  function handleDeleteDispute() {
    deleteMutation.mutate(String(selectedId), {
      onSuccess: () => {
        closeModal();
      },
    });
    return;
  }

  return (
    <HeaderLayout>
      <Summary />
      <Overview />
      {modal === 'ResolveDispute' && (
        <ActionModal
          key={stormyContent.modal.actions.approveDispute.key}
          actionHeading={
            stormyContent.modal.actions.approveDispute.actionHeading
          }
          actionBody={stormyContent.modal.actions.approveDispute.actionBody}
          actionText={stormyContent.modal.actions.approveDispute.actionText}
          icon={Check}
          actionTrigger={resolveDispute}
          isPending={actionMutation.isPending}
          actionTriggerClassName="bg-action-two"
          iconSecondaryClassName="text-action-two"
          iconPrimaryClassName="bg-[#DFF9E5]"
        />
      )}

      {modal === 'DenyDispute' && (
        <ActionModal
          key={stormyContent.modal.actions.denyDispute.key}
          actionHeading={stormyContent.modal.actions.denyDispute.actionHeading}
          actionBody={stormyContent.modal.actions.denyDispute.actionBody}
          actionText={stormyContent.modal.actions.denyDispute.actionText}
          icon={X}
          actionTrigger={denyDispute}
          isPending={actionMutation.isPending}
        />
      )}

      {modal === 'ActionModal' && (
        <ActionModal
          key={stormyContent.modal.actions.deleteDispute.key}
          actionHeading={
            stormyContent.modal.actions.deleteDispute.actionHeading
          }
          actionBody={stormyContent.modal.actions.deleteDispute.actionBody}
          actionText={stormyContent.modal.actions.deleteDispute.actionText}
          icon={X}
          actionTrigger={handleDeleteDispute}
          isPending={deleteMutation.isPending}
        />
      )}
    </HeaderLayout>
  );
}
