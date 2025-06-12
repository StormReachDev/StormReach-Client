// Imports:
import HeaderLayout from '@/layouts/HeaderLayout';
import Overview from './Features/Overview';
import Summary from './Features/Summary';

export default function CustomersModule() {
  return (
    <HeaderLayout>
      <Summary />
      <Overview />
    </HeaderLayout>
  );
}
