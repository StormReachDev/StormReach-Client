// Imports:
import { useModalStore } from '@/stores/useModalStore';
import { useTableStore } from '@/stores/useTableStore';
import { CreditsAndTransactionsTableProps } from '@/types/UI/Table';
import { Button, Chip, Typography } from '@material-tailwind/react';
import { createColumnHelper, Row } from '@tanstack/react-table';
import { Trash2 } from 'lucide-react';

// ******** Credits And Transactions Table ********
const columnHelper = createColumnHelper<CreditsAndTransactionsTableProps>();
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

  columnHelper.accessor('plan', {
    header: 'Plan',
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

  columnHelper.accessor('amount', {
    header: 'Amount',
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

  columnHelper.accessor('transactionType', {
    header: 'Type',
    cell: function (info) {
      return (
        <Chip
          value={info.getValue()}
          className={`text-base font-medium w-fit py-2 px-[10px] capitalize bg-red-200 text-red-800`}
        />
      );
    },
  }),

  columnHelper.accessor('transactionStatus', {
    header: 'Status',
    cell: function (info) {
      const transactionStatus = info.getValue() as
        | 'succeeded'
        | 'failed'
        | 'pending'
        | 'disputed';
      const statusClasses: Record<
        'succeeded' | 'failed' | 'pending' | 'disputed',
        string
      > = {
        succeeded: 'bg-action-two',
        failed: 'bg-action-four',
        pending: 'bg-action-five',
        disputed: 'bg-action-two',
      };

      return (
        <Chip
          value={transactionStatus}
          className={`text-base font-medium w-fit py-2 px-[10px] capitalize ${statusClasses[transactionStatus]}`}
        />
      );
    },
  }),

  columnHelper.accessor('createdAt', {
    header: 'Credit Timestamp',
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
    cell: (info) => <CAndTActionsCell row={info.row} />,
  }),
];

// ******** Credits And Transactions Action Cell ********
function CAndTActionsCell({
  row,
}: {
  row: Row<CreditsAndTransactionsTableProps>;
}) {
  const rooferId = row.original._id;
  const { setId } = useTableStore();
  const { openModal } = useModalStore();

  function handleDelete() {
    setId(rooferId);
    openModal('ActionModal');
    return;
  }

  return (
    <div className="flex items-center justify-between">
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
