// Imports:
import FlaggedAccountModal from '@/components/UI/Modals/Account/Flagged';
import PausedAccountModal from '@/components/UI/Modals/Account/Paused';
import { useMe } from '@/hooks/auth';
import HeaderLayout from '@/layouts/HeaderLayout';
import Onboarding from './Features/Onboarding';
import RooferStatistics from './Features/RooferStatistics';
import Summary from './Features/Summary';

export default function DashboardModule() {
  const { data } = useMe();

  return (
    <>
      <HeaderLayout>
        {data?.customer?.onboarded && <Onboarding />}
        <Summary />
        <RooferStatistics />
        <PausedAccountModal />
        <FlaggedAccountModal />
      </HeaderLayout>
    </>
  );
}
