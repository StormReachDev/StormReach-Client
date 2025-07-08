// Imports:
import { Pagination } from '@/components/UI/Pagination';
import TableSkeleton from '@/components/UI/Skeletons/Table';
import Table from '@/components/UI/Table';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { AppointmentStatusKeys } from '@/constants/Keys';
import { columns as apppointmentColumns } from '@/constants/Table/Columns/Appointment';
import { useAllAppointments } from '@/hooks/appointment';
import { useFilterStore } from '@/stores/useFilterStore';
import { Appointment } from '@/types/Api/Appointment';
import { AppointmentsTableProps } from '@/types/UI/Table';
import { Typography } from '@material-tailwind/react';
import { useMemo } from 'react';
import Actions from '../Actions';

export default function Overview() {
  const { keyword, page, limit, appointmentStatus } = useFilterStore();
  const { data, isLoading } = useAllAppointments(
    keyword.trim(),
    appointmentStatus.trim(),
    page,
    limit
  );

  const columns = useMemo(() => apppointmentColumns, []);
  const rows =
    data?.appointments.map((appointment: Appointment) => ({
      id: appointment._id,
      homeOwnerName: appointment.homeOwnerName,
      appointmentDetails: `${new Date(appointment.appointmentDate).toLocaleDateString()} - ${appointment.appointmentTime}`,
      appointmentStatus:
        AppointmentStatusKeys[
          appointment.appointmentStatus as keyof typeof AppointmentStatusKeys
        ],
      bookedByInfo: appointment.bookedByInfo,
      customerUser: appointment.customerUser,
    })) ?? [];
  const totalPages = Math.ceil(Number(data?.totalCount) / limit);

  return (
    <Wrapper className="max-w-full w-full space-y-7 overflow-unset">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.admin.appointmentLog.overview.heading}
      </Typography>
      <Actions />

      {isLoading ? (
        <TableSkeleton length={rows.length > 0 ? rows.length : 2} />
      ) : (
        rows.length > 0 && (
          <Table<AppointmentsTableProps> data={rows} columns={columns} />
        )
      )}

      {rows.length > 0 && (
        <Pagination className="justify-end" totalPages={totalPages} />
      )}
    </Wrapper>
  );
}
