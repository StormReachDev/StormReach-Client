// Imports:
import { Pagination } from '@/components/UI/Pagination';
import TableSkeleton from '@/components/UI/Skeletons/Table';
import Table from '@/components/UI/Table';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { AccountStatusKeys, UserRoleKeys } from '@/constants/Keys';
import { columns as TeamManagementColumns } from '@/constants/Table/Columns/TeamManagement';
import { useAllMembers } from '@/hooks/team';
import { useFilterStore } from '@/stores/useFilterStore';
import { TeamMembersTableProps } from '@/types/UI/Table';
import { Typography } from '@material-tailwind/react';
import { useMemo } from 'react';
import Actions from '../Actions';

export default function Overview() {
  const { keyword, accountStatus, page, limit } = useFilterStore();
  const { data, isLoading } = useAllMembers(
    keyword.trim(),
    accountStatus.trim(),
    page,
    limit
  );
  const columns = useMemo(() => TeamManagementColumns, []);

  const rows =
    data?.members.map((member) => ({
      id: member._id,
      name: member.name,
      role: UserRoleKeys[member.role as keyof typeof UserRoleKeys],
      email: member.email,
      assignedCustomers: Array.isArray(member.assignedCustomers)
        ? member.assignedCustomers.length
        : 0,
      accountStatus:
        AccountStatusKeys[member.status as keyof typeof AccountStatusKeys],
    })) ?? [];

  const totalPages = Math.ceil(Number(data?.totalCount) / limit);

  return (
    <Wrapper className="max-w-full w-full space-y-7 overflow-unset">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.admin.teamManagement.overview.heading}
      </Typography>
      <Actions />

      {isLoading ? (
        <TableSkeleton length={rows.length > 0 ? rows.length : 2} />
      ) : (
        rows.length > 0 && (
          <Table<TeamMembersTableProps> data={rows} columns={columns} />
        )
      )}

      {rows.length > 0 && (
        <Pagination className="justify-end" totalPages={totalPages} />
      )}
    </Wrapper>
  );
}
