// Imports:
import HeaderLayout from '@/layouts/HeaderLayout';
import Customers from './Features/Customers';
import DisputesAndAppointments from './Features/DisputesAndAppointments';
import Teams from './Features/Teams';

export default function DashboardModule() {
  return (
    <>
      <HeaderLayout>
        <Customers />
        <Teams />
        <DisputesAndAppointments />
      </HeaderLayout>
    </>
  );
}
