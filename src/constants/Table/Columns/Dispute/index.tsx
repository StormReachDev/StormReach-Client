// Imports:
import { useModalStore } from '@/stores/useModalStore';
import { useTableStore } from '@/stores/useTableStore';
import { DisputesTableProps } from '@/types/UI/Table';
import { Button, Chip, Typography } from '@material-tailwind/react';
import { createColumnHelper, Row } from '@tanstack/react-table';
import { Check, Trash2, X } from 'lucide-react';

// ******** Dispute Table ********
const columnHelper = createColumnHelper<DisputesTableProps>();
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

  columnHelper.accessor('disputeSubmissionDate', {
    header: 'Submission Date',
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
    cell: (info) => <DisputeActionsCell row={info.row} />,
  }),
];

// ******** Dispute Action Cell ********
function DisputeActionsCell({ row }: { row: Row<DisputesTableProps> }) {
  const disputeId = row.original.id;
  const { openModal } = useModalStore();
  const { setId } = useTableStore();

  function handleDelete() {
    setId(disputeId);
    openModal('ActionModal');
    return;
  }

  function handleResolve() {
    setId(disputeId);
    openModal('ResolveDispute');
    return;
  }

  function handleDeny() {
    setId(disputeId);
    openModal('DenyDispute');
    return;
  }

  return (
    <div className="flex items-center justify-between">
      <Button
        size="sm"
        className="bg-transparent p-0 text-action-two"
        onClick={handleResolve}
        ripple={false}
        type="button"
        disabled={row.original.appointmentStatus === 'Disputed'}
      >
        <Check className="size-5 hover:text-primary transition-colors" />
      </Button>

      <Button
        size="sm"
        className="bg-transparent p-0 text-action-four"
        ripple={false}
        onClick={handleDeny}
        type="button"
        disabled={
          row.original.appointmentStatus === 'Disputed' ||
          row.original.appointmentStatus === 'Denied'
        }
      >
        <X className="size-5 hover:text-primary transition-colors" />
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
