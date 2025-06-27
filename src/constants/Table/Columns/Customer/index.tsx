// Imports:
import { QueryKeys } from '@/constants/Keys';
import queryClient from '@/lib/queryClient';
import { cn } from '@/lib/utils';
import RooferService from '@/services/Roofer';
import { useModalStore } from '@/stores/useModalStore';
import { useTableStore } from '@/stores/useTableStore';
import { CustomersTableProps } from '@/types/UI/Table';
import { Button, Chip, Typography } from '@material-tailwind/react';
import { CellContext, createColumnHelper, Row } from '@tanstack/react-table';
import { Edit3, MapPin, Trash2 } from 'lucide-react';

// ******** Customer Table ********
const columnHelper = createColumnHelper<CustomersTableProps>();
export const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
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

  columnHelper.accessor('email', {
    header: 'Mail',
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

  columnHelper.accessor('plan', {
    header: 'Plan',
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

  columnHelper.accessor('credits', {
    header: 'Credits',
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

  columnHelper.accessor('accountStatus', {
    header: 'Status',
    cell: function (info) {
      const status = info.getValue();
      const statusClasses = {
        Active: 'bg-action-two',
        Paused: 'bg-action-four',
        Flagged: 'bg-action-five',
      };

      return (
        <Chip
          value={status}
          className={`text-base font-medium w-fit py-2 px-[10px] capitalize ${statusClasses[status]}`}
        />
      );
    },
  }),

  columnHelper.accessor('assignedAgents', {
    header: 'Agents',
    cell: (info) => <AssignedAgentsCell info={info} />,
  }),

  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: (info) => <CustomerActionsCell row={info.row} />,
  }),
];

// ******** Assigned Agents Cell ********
function AssignedAgentsCell({
  info,
}: {
  info: CellContext<CustomersTableProps, string[]>;
}) {
  const { openModal } = useModalStore();
  const { setId } = useTableStore();

  const rooferId = info.row.original.id;
  const agents = info.getValue() ?? [];
  const displayAgents = agents.slice(0, 1);
  const remainingCount = agents.length - displayAgents.length;

  async function handleTrigger() {
    setId(rooferId);
    await queryClient.prefetchQuery({
      queryKey: [QueryKeys.ROOFER, rooferId],
      queryFn: () => RooferService.roofer(rooferId),
    });
    openModal('EditCustomer');
    return;
  }

  return (
    <div className="flex gap-1 flex-wrap items-center">
      {displayAgents.map((agent, idx) => (
        <Typography
          key={`${agent}-${idx}`}
          variant="lead"
          className={cn(
            'text-lg font-medium',
            idx === 1 ? 'text-red-500' : 'text-neutral-800'
          )}
        >
          {agent}
          {idx === 0 && displayAgents.length > 1 ? ' & ' : ''}
        </Typography>
      ))}
      {remainingCount > 0 && (
        <Typography
          variant="lead"
          className="text-lg font-medium text-red-500 cursor-pointer"
        >
          & {remainingCount}{' '}
          <span className="hover:underline" onClick={handleTrigger}>
            more
          </span>
        </Typography>
      )}
    </div>
  );
}

// ******** Customer Actions Cell ********
function CustomerActionsCell({ row }: { row: Row<CustomersTableProps> }) {
  const rooferId = row.original.id;
  const { openModal } = useModalStore();
  const { setId } = useTableStore();

  async function handleTrigger() {
    setId(rooferId);
    await queryClient.prefetchQuery({
      queryKey: [QueryKeys.ROOFER, rooferId],
      queryFn: () => RooferService.roofer(rooferId),
    });
    openModal('EditCustomer');
    return;
  }

  function handleDelete() {
    setId(rooferId);
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
