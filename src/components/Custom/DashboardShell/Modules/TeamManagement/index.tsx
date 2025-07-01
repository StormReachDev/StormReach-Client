// Imports:
import Teams from '@/components/Shared/Teams';
import ActionModal from '@/components/UI/Modals/Action';
import AddTeamModal from '@/components/UI/Modals/AddTeam';
import EditTeamModal from '@/components/UI/Modals/EditTeam';
import stormyContent from '@/constants/Content';
import { useDeleteMember } from '@/hooks/team';
import HeaderLayout from '@/layouts/HeaderLayout';
import { useModalStore } from '@/stores/useModalStore';
import { useTableStore } from '@/stores/useTableStore';
import { X } from 'lucide-react';
import Overview from './Features/Overview';

export default function TeamManagementModule() {
  const mutation = useDeleteMember();
  const { selectedId } = useTableStore();
  const { closeModal } = useModalStore();

  function handleDeleteMember() {
    mutation.mutate(String(selectedId), {
      onSuccess: () => {
        closeModal();
      },
    });
    return;
  }

  return (
    <HeaderLayout>
      <Teams heading={stormyContent.admin.teamManagement.summary.heading} />
      <Overview />
      <AddTeamModal />
      <EditTeamModal />
      <ActionModal
        key={stormyContent.modal.actions.deleteMember.key}
        actionHeading={stormyContent.modal.actions.deleteMember.actionHeading}
        actionBody={stormyContent.modal.actions.deleteMember.actionBody}
        actionText={stormyContent.modal.actions.deleteMember.actionText}
        icon={X}
        actionTrigger={handleDeleteMember}
        isPending={mutation.isPending}
      />
    </HeaderLayout>
  );
}
