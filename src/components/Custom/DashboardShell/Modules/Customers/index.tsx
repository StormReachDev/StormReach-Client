// Imports:
import AddCustomerModal from '@/components/UI/Modals/AddCustomer';
import PaymentProvider from '@/contexts/PaymentProvider';
import HeaderLayout from '@/layouts/HeaderLayout';
import Overview from './Features/Overview';
import Summary from './Features/Summary';

export default function CustomersModule() {
  return (
    <HeaderLayout>
      <Summary />
      <Overview />
      <PaymentProvider>
        <AddCustomerModal />
      </PaymentProvider>
    </HeaderLayout>
  );
}
