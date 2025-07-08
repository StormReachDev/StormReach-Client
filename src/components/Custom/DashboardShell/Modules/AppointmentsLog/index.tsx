// Imports:
import ActionModal from '@/components/UI/Modals/Action';
import AddAppointmentModal from '@/components/UI/Modals/AddAppointment';
import EditAppointmentModal from '@/components/UI/Modals/EditAppointment';
import stormyContent from '@/constants/Content';
import { useDeleteAppointment } from '@/hooks/appointment';
import HeaderLayout from '@/layouts/HeaderLayout';
import { useModalStore } from '@/stores/useModalStore';
import { useTableStore } from '@/stores/useTableStore';
import { X } from 'lucide-react';
import Overview from './Features/Overview';
import Summary from './Features/Summary';

export default function AppointmentsLogModule() {
  const mutation = useDeleteAppointment();
  const { selectedId } = useTableStore();
  const { closeModal } = useModalStore();

  function handleDeleteAppointment() {
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
      <AddAppointmentModal />
      <EditAppointmentModal />
      <ActionModal
        key={stormyContent.modal.actions.deleteAppointment.key}
        actionHeading={
          stormyContent.modal.actions.deleteAppointment.actionHeading
        }
        actionBody={stormyContent.modal.actions.deleteAppointment.actionBody}
        actionText={stormyContent.modal.actions.deleteAppointment.actionText}
        icon={X}
        actionTrigger={handleDeleteAppointment}
        isPending={mutation.isPending}
      />
    </HeaderLayout>
  );
}
