// Imports:
import { QueryKeys } from '@/constants/Keys';
import queryClient from '@/lib/queryClient';
import AppointmentService from '@/services/Appointment';
import { useModalStore } from '@/stores/useModalStore';
import { useTableStore } from '@/stores/useTableStore';
import { AppointmentsTableProps } from '@/types/UI/Table';
import { Button, Chip, Typography } from '@material-tailwind/react';
import { createColumnHelper, Row } from '@tanstack/react-table';
import { Edit3, MapPin, Trash2 } from 'lucide-react';

// ******** Appointment Table ********
const columnHelper = createColumnHelper<AppointmentsTableProps>();
export const columns = [
  columnHelper.accessor('customerUser.name', {
    header: 'Customer Name',
    cell: function (info) {
      return (
        <Typography
          variant="lead"
          className="text-lg font-medium text-neutral-800"
        >
          {info.getValue()}
        </Typography>
      );
    },
  }),

  columnHelper.accessor('homeOwnerName', {
    header: 'Home Owner',
    cell: function (info) {
      return (
        <Typography
          variant="lead"
          className="text-lg font-medium text-neutral-800 text-ellipsis"
        >
          {info.getValue()}
        </Typography>
      );
    },
  }),

  columnHelper.accessor('appointmentDetails', {
    header: 'Appointment Details',
    cell: function (info) {
      return (
        <Typography
          variant="lead"
          className="text-lg font-medium text-neutral-800"
        >
          {info.getValue()}
        </Typography>
      );
    },
  }),

  columnHelper.accessor('appointmentStatus', {
    header: 'Status',
    cell: function (info) {
      const status = info.getValue();
      const statusClasses = {
        Completed: 'bg-action-two',
        Disputed: 'bg-action-four',
        Scheduled: 'bg-action-five',
        Pending: 'bg-action-five',
        Denied: 'bg-action-four',
      };

      return (
        <Chip
          value={status}
          className={`text-base font-medium w-fit py-2 px-[10px] capitalize ${statusClasses[status]}`}
        />
      );
    },
  }),

  columnHelper.accessor('bookedByInfo.name', {
    header: 'Booked By',
    cell: function (info) {
      return (
        <Typography
          variant="lead"
          className="text-lg font-medium text-neutral-800"
        >
          {info.getValue()}
        </Typography>
      );
    },
  }),

  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: (info) => <CustomerActionsCell row={info.row} />,
  }),
];

// ******** Appointment Action Cell ********
function CustomerActionsCell({ row }: { row: Row<AppointmentsTableProps> }) {
  const appointmentId = row.original.id;
  const { openModal } = useModalStore();
  const { setId } = useTableStore();

  async function handleTrigger() {
    setId(appointmentId);
    await queryClient.prefetchQuery({
      queryKey: [QueryKeys.APPOINTMENT, appointmentId],
      queryFn: () => AppointmentService.getAppointment(appointmentId),
    });
    openModal('EditAppointment');
    return;
  }

  function handleDelete() {
    setId(appointmentId);
    openModal('ActionModal');
    return;
  }

  return (
    <div className="flex items-center justify-between">
      <Button
        size="sm"
        className="bg-transparent p-0"
        ripple={false}
        type="button"
      >
        <MapPin className="size-5 hover:text-primary transition-colors" />
      </Button>

      <Button
        size="sm"
        className="bg-transparent p-0"
        onClick={handleTrigger}
        ripple={false}
        type="button"
      >
        <Edit3 className="size-5 hover:text-primary transition-colors" />
      </Button>

      <Button
        size="sm"
        className="bg-transparent p-0 text-action-four"
        ripple={false}
        onClick={handleDelete}
        type="button"
      >
        <Trash2 className="size-5 hover:text-primary transition-colors" />
      </Button>
    </div>
  );
}
