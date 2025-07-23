// Imports:
import { RooferBillingsTableProps } from '@/types/UI/Table';
import { Chip, Typography } from '@material-tailwind/react';
import { createColumnHelper } from '@tanstack/react-table';

// ******** Billings Table ********
const columnHelper = createColumnHelper<RooferBillingsTableProps>();
export const columns = [
  columnHelper.accessor('createdAt', {
    header: 'Billing Date',
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
    header: 'Intent',
    cell: function (info) {
      return (
        <Typography
          variant="lead"
          className="text-lg font-medium text-action-four text-ellipsis"
        >
          {info.getValue()}
        </Typography>
      );
    },
  }),

  columnHelper.accessor('creditsPurchased', {
    header: 'Credits Purchased',
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
        | 'disputed';
      const statusClasses: Record<'succeeded' | 'failed' | 'disputed', string> =
        {
          succeeded: 'bg-action-two',
          failed: 'bg-action-four',
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

  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: function (info) {
      return (
        <Typography
          variant="lead"
          className="text-lg font-medium text-neutral-800 text-ellipsis"
        >
          {`$${info.getValue()}`}
        </Typography>
      );
    },
  }),
];
