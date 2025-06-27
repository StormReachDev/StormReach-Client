// Imports:
import ActionModal from '@/components/UI/Modals/Action';
import stormyContent from '@/constants/Content';
import { useDeleteTransaction } from '@/hooks/transaction';
import HeaderLayout from '@/layouts/HeaderLayout';
import { useModalStore } from '@/stores/useModalStore';
import { useTableStore } from '@/stores/useTableStore';
import { X } from 'lucide-react';
import Overview from './Features/Overview';
import Summary from './Features/Summary';

export default function CAndTModule() {
  const mutation = useDeleteTransaction();
  const { selectedId } = useTableStore();
  const { closeModal } = useModalStore();

  function handleDeleteTransaction() {
    mutation.mutate(String(selectedId), {
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
      <ActionModal
        key={stormyContent.modal.actions.deleteTransaction.key}
        actionHeading={
          stormyContent.modal.actions.deleteTransaction.actionHeading
        }
        actionBody={stormyContent.modal.actions.deleteTransaction.actionBody}
        actionText={stormyContent.modal.actions.deleteTransaction.actionText}
        icon={X}
        actionTrigger={handleDeleteTransaction}
        isPending={mutation.isPending}
      />
    </HeaderLayout>
  );
}
