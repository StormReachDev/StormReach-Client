// Imports:
import Customers from '@/components/Shared/Customers';
import ActionModal from '@/components/UI/Modals/Action';
import AddCustomerModal from '@/components/UI/Modals/AddCustomer';
import EditCustomerModal from '@/components/UI/Modals/EditCustomer';
import stormyContent from '@/constants/Content';
import PaymentProvider from '@/contexts/PaymentProvider';
import { useDeleteRoofer } from '@/hooks/roofer';
import HeaderLayout from '@/layouts/HeaderLayout';
import { useModalStore } from '@/stores/useModalStore';
import { useTableStore } from '@/stores/useTableStore';
import { X } from 'lucide-react';
import Overview from './Features/Overview';

export default function CustomersModule() {
  const mutation = useDeleteRoofer();
  const { selectedId } = useTableStore();
  const { closeModal } = useModalStore();

  function handleDeleteCustomer() {
    mutation.mutate(String(selectedId), {
      onSuccess: () => {
        closeModal();
      },
    });
    return;
  }

  return (
    <HeaderLayout>
      <Customers heading={stormyContent.admin.customers.summary.heading} />
      <Overview />
      <PaymentProvider>
        <AddCustomerModal />
      </PaymentProvider>
      <EditCustomerModal />
      <ActionModal
        key={stormyContent.modal.actions.deleteCustomer.key}
        actionHeading={stormyContent.modal.actions.deleteCustomer.actionHeading}
        actionBody={stormyContent.modal.actions.deleteCustomer.actionBody}
        actionText={stormyContent.modal.actions.deleteCustomer.actionText}
        icon={X}
        actionTrigger={handleDeleteCustomer}
        isPending={mutation.isPending}
      />
    </HeaderLayout>
  );
}
