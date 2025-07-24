// Imports:
import HeaderLayout from '@/layouts/HeaderLayout';
import Overview from './Features/Overview';
import Summary from './Features/Summary';

export default function BAndPModule() {
  return (
    <HeaderLayout>
      <Summary />
      <Overview />
    </HeaderLayout>
  );
}
