// Imports:
import AppointmentSummaryMetrics from '@/components/Shared/Customer/AppointmentSummaryMetrics';
import ActionModal from '@/components/UI/Modals/Action';
import DisputeAppointmentModal from '@/components/UI/Modals/DisputeAppointment';
import stormyContent from '@/constants/Content';
import { useUpdateAppointment } from '@/hooks/appointment';
import HeaderLayout from '@/layouts/HeaderLayout';
import { useModalStore } from '@/stores/useModalStore';
import { useTableStore } from '@/stores/useTableStore';
import { Check } from 'lucide-react';
import Overview from './Features/Overview';

export default function AppointmentsModule() {
  const mutation = useUpdateAppointment();
  const { selectedId, setId } = useTableStore();
  const { closeModal } = useModalStore();

  function handleCompleteAppointment() {
    const formData = new FormData();
    formData.set('appointmentStatus', 'completed');

    mutation.mutate(
      { id: String(selectedId), data: formData },
      {
        onSuccess: () => {
          closeModal();
          setId('');
        },
      }
    );
    return;
  }

  return (
    <HeaderLayout>
      <AppointmentSummaryMetrics
        heading={stormyContent.cutomer.dashboard.summary.heading}
      />
      <Overview />
      <DisputeAppointmentModal />
      <ActionModal
        key={stormyContent.modal.completeAppointment.key}
        actionHeading={stormyContent.modal.completeAppointment.heading}
        actionBody={stormyContent.modal.completeAppointment.body}
        actionText={
          stormyContent.modal.completeAppointment.buttons.completeAppointment
            .text
        }
        icon={Check}
        actionTrigger={handleCompleteAppointment}
        isPending={mutation.isPending}
        actionTriggerClassName="bg-action-two"
        iconSecondaryClassName="text-action-two"
        iconPrimaryClassName="bg-[#DFF9E5]"
      />
    </HeaderLayout>
  );
}
