// Imports:
import { QueryKeys } from '@/constants/Keys';
import queryClient from '@/lib/queryClient';
import { cn } from '@/lib/utils';
import TeamService from '@/services/Team';
import { useModalStore } from '@/stores/useModalStore';
import { useTableStore } from '@/stores/useTableStore';
import { TeamMembersTableProps } from '@/types/UI/Table';
import { Button, Chip, Typography } from '@material-tailwind/react';
import { createColumnHelper, Row } from '@tanstack/react-table';
import { Edit3, Trash2 } from 'lucide-react';

// ******** Team Members Table ********
const columnHelper = createColumnHelper<TeamMembersTableProps>();
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

  columnHelper.accessor('role', {
    header: 'Role',
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

  columnHelper.accessor('assignedCustomers', {
    header: 'Assigned Customers',
    cell: function (info) {
      const value = Number(info.getValue());

      return (
        <Typography
          variant="lead"
          className={cn('text-lg font-medium', {
            'text-action-two': value > 0,
            'text-action-four': value < 1,
          })}
        >
          {info.getValue()}
        </Typography>
      );
    },
  }),

  // TODO: Uncomment when appointmentsBooked is available.
  // columnHelper.accessor('appointmentsBooked', {
  //   header: 'Appointments Booked',
  //   cell: function (info) {
  //     return (
  //       <Typography
  //         variant="lead"
  //         className="text-lg font-medium text-neutral-800"
  //       >
  //         {info.getValue()}
  //       </Typography>
  //     );
  //   },
  // }),

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

  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: (info) => <CustomerActionsCell row={info.row} />,
  }),
];

// ******** Team Action Cell ********
function CustomerActionsCell({ row }: { row: Row<TeamMembersTableProps> }) {
  const memberId = row.original.id;
  const { openModal } = useModalStore();
  const { setId } = useTableStore();

  async function handleTrigger() {
    setId(memberId);
    await queryClient.prefetchQuery({
      queryKey: [QueryKeys.TEAM_MEMBER, memberId],
      queryFn: () => TeamService.member(memberId),
    });

    openModal('EditTeam');
    return;
  }

  function handleDelete() {
    setId(memberId);
    openModal('ActionModal');
    return;
  }

  return (
    <div className="flex items-center justify-between">
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
