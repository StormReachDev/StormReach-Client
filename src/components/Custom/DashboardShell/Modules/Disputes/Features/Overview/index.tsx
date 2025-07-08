// Imports:
import { Pagination } from '@/components/UI/Pagination';
import TableSkeleton from '@/components/UI/Skeletons/Table';
import Table from '@/components/UI/Table';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { AppointmentStatusKeys } from '@/constants/Keys';
import { columns as disputeColumns } from '@/constants/Table/Columns/Dispute';
import { useAllDisputes } from '@/hooks/dispute';
import { useFilterStore } from '@/stores/useFilterStore';
import { Appointment } from '@/types/Api/Appointment';
import { DisputesTableProps } from '@/types/UI/Table';
import { Typography } from '@material-tailwind/react';
import { useMemo } from 'react';
import Actions from '../Actions';

export default function Overview() {
  const { keyword, disputeStatus, page, limit } = useFilterStore();
  const { data, isLoading } = useAllDisputes(
    keyword.trim(),
    disputeStatus.trim(),
    page,
    limit
  );

  const columns = useMemo(() => disputeColumns, []);
  const rows =
    data?.disputes.map((appointment: Appointment) => ({
      id: appointment._id,
      customerUser: { name: appointment.customerUser?.name ?? '' },
      appointmentStatus:
        AppointmentStatusKeys[
          appointment.appointmentStatus as keyof typeof AppointmentStatusKeys
        ],
      appointmentDetails: `${new Date(appointment.appointmentDate).toLocaleDateString()} - ${appointment.appointmentTime}`,
      disputeSubmissionDate: new Date(
        String(appointment.disputeSubmissionDate)
      ).toLocaleDateString(),
    })) ?? [];
  const totalPages = Math.ceil(Number(data?.totalCount) / limit);

  return (
    <Wrapper className="max-w-full w-full space-y-7 overflow-unset">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.admin.disputes.overview.heading}
      </Typography>
      <Actions />

      {isLoading ? (
        <TableSkeleton length={rows.length > 0 ? rows.length : 2} />
      ) : (
        rows.length > 0 && (
          <Table<DisputesTableProps> data={rows} columns={columns} />
        )
      )}

      {rows.length > 0 && (
        <Pagination className="justify-end" totalPages={totalPages} />
      )}
    </Wrapper>
  );
}
