// Imports:
import { cn } from '@/lib/utils';
import { useModalStore } from '@/stores/useModalStore';
import { useTableStore } from '@/stores/useTableStore';
import { RooferAppointmentsTableProps } from '@/types/UI/Table';
import { Button, Chip, Typography } from '@material-tailwind/react';
import { createColumnHelper, Row } from '@tanstack/react-table';
import { Flag, MapPin } from 'lucide-react';

// ******** Roofer's Appointment Table ********
const columnHelper = createColumnHelper<RooferAppointmentsTableProps>();
export const columns = [
  columnHelper.accessor('homeOwnerName', {
    header: 'Home Owner',
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

  columnHelper.accessor('homeOwnerAddress', {
    header: 'Home Owner Address',
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

  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: (info) => <CustomerActionsCell row={info.row} />,
  }),
];

// ******** Roofer's Appointment Action Cell ********
function CustomerActionsCell({
  row,
}: {
  row: Row<RooferAppointmentsTableProps>;
}) {
  const appointmentId = row.original.id;
  const { setId } = useTableStore();
  const { openModal } = useModalStore();

  function handleFlagAppointment() {
    setId(appointmentId);
    openModal('DisputeAppointment');
    return;
  }

  return (
    <div className="flex items-center justify-start gap-3">
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
        ripple={false}
        onClick={handleFlagAppointment}
        type="button"
        disabled={
          row.original.isDisputed || row.original.appointmentStatus === 'Denied'
        }
      >
        <Flag
          className={cn('size-5 hover:text-primary transition-colors', {
            'text-primary':
              row.original.isDisputed ||
              row.original.appointmentStatus === 'Denied',
          })}
        />
      </Button>
    </div>
  );
}
