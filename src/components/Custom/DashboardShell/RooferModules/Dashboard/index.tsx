// Imports:
import AppointmentSummaryMetrics from '@/components/Shared/Customer/AppointmentSummaryMetrics';
import FlaggedAccountModal from '@/components/UI/Modals/Account/Flagged';
import PausedAccountModal from '@/components/UI/Modals/Account/Paused';
import stormyContent from '@/constants/Content';
import { useMe } from '@/hooks/auth';
import HeaderLayout from '@/layouts/HeaderLayout';
import Onboarding from './Features/Onboarding';
import RooferStatistics from './Features/RooferStatistics';

export default function DashboardModule() {
  const { data } = useMe();

  return (
    <>
      <HeaderLayout>
        {data?.customer?.onboarded && <Onboarding />}
        <AppointmentSummaryMetrics
          heading={stormyContent.cutomer.dashboard.summary.heading}
        />
        <RooferStatistics />
        <PausedAccountModal />
        <FlaggedAccountModal />
      </HeaderLayout>
    </>
  );
}
