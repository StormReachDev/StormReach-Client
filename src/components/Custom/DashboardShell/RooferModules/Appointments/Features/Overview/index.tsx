// Imports:
import { Pagination } from '@/components/UI/Pagination';
import TableSkeleton from '@/components/UI/Skeletons/Table';
import Table from '@/components/UI/Table';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { AppointmentStatusKeys } from '@/constants/Keys';
import { columns as rooferAppointmentColumns } from '@/constants/Table/RooferColumns/Appointment';
import { useMe } from '@/hooks/auth';
import { useCustomerAppointments } from '@/hooks/roofer';
import { useFilterStore } from '@/stores/useFilterStore';
import { RooferAppointmentsTableProps } from '@/types/UI/Table';
import { Typography } from '@material-tailwind/react';
import { useMemo } from 'react';
import Actions from '../Actions';

export default function Overview() {
  const { data: currentRoofer } = useMe();
  const { keyword, appointmentStatus, page, limit } = useFilterStore();
  const { data, isLoading } = useCustomerAppointments(
    currentRoofer?.customer?._id.trim() ?? '',
    keyword.trim(),
    appointmentStatus.trim(),
    page,
    limit
  );

  const columns = useMemo(() => rooferAppointmentColumns, []);
  const rows =
    data?.appointments.map((appointment) => ({
      id: appointment._id,
      isDisputed: appointment.isDisputed,
      homeOwnerName: appointment.homeOwnerName,
      homeOwnerAddress: appointment.homeOwnerAddress,
      appointmentStatus:
        AppointmentStatusKeys[
          appointment.appointmentStatus as keyof typeof AppointmentStatusKeys
        ],
      appointmentDetails: `${new Date(appointment.appointmentDate).toLocaleDateString()} - ${appointment.appointmentTime}`,
    })) ?? [];

  const totalPages = Math.ceil(Number(data?.totalCount) / limit);

  return (
    <Wrapper className="max-w-full w-full space-y-7 overflow-unset">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.cutomer.appointments.heading}
      </Typography>
      <Actions />

      {isLoading ? (
        <TableSkeleton length={rows.length > 0 ? rows.length : 2} />
      ) : (
        rows.length > 0 && (
          <Table<RooferAppointmentsTableProps> data={rows} columns={columns} />
        )
      )}

      {rows.length > 0 && (
        <Pagination className="justify-end" totalPages={totalPages} />
      )}
    </Wrapper>
  );
}
