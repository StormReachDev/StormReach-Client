// Imports:
import Teams from '@/components/Shared/Admin/Teams';
import stormyContent from '@/constants/Content';
import HeaderLayout from '@/layouts/HeaderLayout';
import Customers from '../../../../Shared/Admin/Customers';
import DisputesAndAppointments from './Features/DisputesAndAppointments';

export default function DashboardModule() {
  return (
    <>
      <HeaderLayout>
        <Customers heading={stormyContent.admin.dashboard.customers.heading} />
        <Teams heading={stormyContent.admin.dashboard.teams.heading} />
        <DisputesAndAppointments />
      </HeaderLayout>
    </>
  );
}
