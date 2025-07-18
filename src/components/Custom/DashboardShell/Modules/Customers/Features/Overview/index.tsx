// Imports:
import { Pagination } from '@/components/UI/Pagination';
import TableSkeleton from '@/components/UI/Skeletons/Table';
import Table from '@/components/UI/Table';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { AccountStatusKeys } from '@/constants/Keys';
import { columns as customerColumns } from '@/constants/Table/Columns/Customer';
import { useAllRoofers } from '@/hooks/roofer';
import { useFilterStore } from '@/stores/useFilterStore';
import { Roofer } from '@/types/Api/Roofer';
import { CustomersTableProps } from '@/types/UI/Table';
import { Typography } from '@material-tailwind/react';
import { useMemo } from 'react';
import Actions from '../Actions';

export default function Overview() {
  const { keyword, plan, accountStatus, assignedAgents, page, limit } =
    useFilterStore();
  const { data, isLoading } = useAllRoofers(
    keyword.trim(),
    plan.trim(),
    accountStatus.trim(),
    assignedAgents,
    page,
    limit
  );

  const columns = useMemo(() => customerColumns, []);
  const rows =
    data?.roofers?.map((roofer: Roofer) => ({
      id: roofer._id,
      name: roofer?.userInfo?.name ?? '',
      email: roofer?.userInfo?.email ?? '',
      plan: roofer.plan,
      credits: roofer.appointmentCredits,
      accountStatus:
        AccountStatusKeys[
          roofer?.userInfo?.status as keyof typeof AccountStatusKeys
        ],
      assignedAgents:
        roofer?.agentsInfo?.map((agent) => agent?.name ?? '') ?? [],
    })) ?? [];

  const totalPages = Math.ceil(Number(data?.totalCount) / limit);

  return (
    <Wrapper className="max-w-full w-full space-y-7 overflow-unset">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.admin.customers.overview.heading}
      </Typography>
      <Actions />

      {isLoading ? (
        <TableSkeleton length={rows.length > 0 ? rows.length : 2} />
      ) : (
        rows.length > 0 && (
          <Table<CustomersTableProps> data={rows} columns={columns} />
        )
      )}

      {rows.length > 0 && (
        <Pagination className="justify-end" totalPages={totalPages} />
      )}
    </Wrapper>
  );
}
