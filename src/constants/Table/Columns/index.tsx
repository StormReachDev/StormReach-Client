// Imports:
import { cn } from '@/lib/utils';
import { CustomersTableProps } from '@/types/UI/Table';
import { Button, Chip, Typography } from '@material-tailwind/react';
import { createColumnHelper } from '@tanstack/react-table';
import { Edit3, MapPin, Trash2 } from 'lucide-react';

// ******** Customer Table ********
const columnHelper = createColumnHelper<CustomersTableProps>();
export const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => (
      <Typography
        variant="lead"
        className="text-lg font-medium text-neutral-800"
      >
        {info.getValue()}
      </Typography>
    ),
  }),

  columnHelper.accessor('email', {
    header: 'Mail',
    cell: (info) => (
      <Typography
        variant="lead"
        className="text-lg font-medium text-neutral-800 text-ellipsis"
      >
        {info.getValue()}
      </Typography>
    ),
  }),

  columnHelper.accessor('plan', {
    header: 'Plan',
    cell: (info) => (
      <Typography
        variant="lead"
        className="text-lg font-medium text-neutral-800"
      >
        {info.getValue()}
      </Typography>
    ),
  }),

  columnHelper.accessor('credits', {
    header: 'Credits',
    cell: (info) => (
      <Typography
        variant="lead"
        className="text-lg font-medium text-neutral-800"
      >
        {info.getValue()}
      </Typography>
    ),
  }),

  columnHelper.accessor('accountStatus', {
    header: 'Status',
    cell: (info) => {
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
    header: 'Assigned Agents',
    cell: (info) => {
      const agents = info.getValue() ?? [];

      const displayAgents = agents.slice(0, 1);
      const remainingCount = agents.length - displayAgents.length;

      return (
        <div className="flex gap-1 flex-wrap items-center">
          {displayAgents.map((agent, idx) => (
            <Typography
              key={agent}
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
              & {remainingCount} <span className="hover:underline">more</span>
            </Typography>
          )}
        </div>
      );
    },
  }),

  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: () => (
      <div className="flex items-center justify-between">
        <Button size="sm" className="bg-transparent p-0">
          <MapPin className="size-5" />
        </Button>

        <Button size="sm" className="bg-transparent p-0">
          <Edit3 className="size-5" />
        </Button>

        <Button size="sm" className="bg-transparent p-0 text-action-four">
          <Trash2 className="size-5" />
        </Button>
      </div>
    ),
  }),
];
