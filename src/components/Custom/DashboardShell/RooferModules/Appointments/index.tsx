// Imports:
import AppointmentSummaryMetrics from '@/components/Shared/Customer/AppointmentSummaryMetrics';
import DisputeAppointmentModal from '@/components/UI/Modals/DisputeAppointment';
import stormyContent from '@/constants/Content';
import HeaderLayout from '@/layouts/HeaderLayout';
import Overview from './Features/Overview';

export default function AppointmentsModule() {
  return (
    <HeaderLayout>
      <AppointmentSummaryMetrics
        heading={stormyContent.cutomer.dashboard.summary.heading}
      />
      <Overview />
      <DisputeAppointmentModal />
    </HeaderLayout>
  );
}
