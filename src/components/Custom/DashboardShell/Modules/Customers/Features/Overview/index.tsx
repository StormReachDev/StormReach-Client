// Imports:
import CustomersTable from '@/components/UI/Tables/Customers';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { useAllRoofers } from '@/hooks/roofer';
import { AccountStatusKeys } from '@/types/Api/Meta';
import { Roofer } from '@/types/Api/Roofer';
import { Typography } from '@material-tailwind/react';
import Actions from '../Actions';

export default function Overview() {
  const { data } = useAllRoofers();

  const rows =
    data?.roofers?.map((roofer: Roofer) => ({
      id: roofer._id,
      name: roofer.user.name,
      email: roofer.user.email,
      plan: roofer.plan,
      credits: roofer.appointmentCredits,
      accountStatus:
        AccountStatusKeys[roofer.user.status as keyof typeof AccountStatusKeys],
      assignedAgents: roofer.assignedAgents.map(
        (agent) => agent.name.split(' ')[0]
      ),
    })) ?? [];

  return (
    <Wrapper className="max-w-full w-full space-y-7 overflow-unset">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.admin.customers.overview.heading}
      </Typography>
      <Actions />
      <CustomersTable data={rows} />
    </Wrapper>
  );
}
