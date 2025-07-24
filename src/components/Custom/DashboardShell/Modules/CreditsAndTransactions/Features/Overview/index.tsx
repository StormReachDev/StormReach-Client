// Imports:
import { Pagination } from '@/components/UI/Pagination';
import TableSkeleton from '@/components/UI/Skeletons/Table';
import Table from '@/components/UI/Table';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { columns as CreditsAndTransactionsColumns } from '@/constants/Table/Columns/CreditsAndTransactions';
import { useAllTransactions } from '@/hooks/transaction';
import { useFilterStore } from '@/stores/useFilterStore';
import { Transaction } from '@/types/Api/Transaction';
import { CreditsAndTransactionsTableProps } from '@/types/UI/Table';
import { Typography } from '@material-tailwind/react';
import { useMemo } from 'react';
import Actions from '../Actions';

export default function Overview() {
  const { keyword, transactionType, transactionStatus, page, limit } =
    useFilterStore();
  const { data, isLoading } = useAllTransactions(
    keyword.trim(),
    transactionType.trim(),
    transactionStatus.trim(),
    page,
    limit
  );

  const columns = useMemo(() => CreditsAndTransactionsColumns, []);
  const rows =
    data?.transactions.map((transaction: Transaction) => ({
      _id: transaction._id,
      customerUser: { name: transaction.customerUser?.name ?? '' },
      plan: transaction.plan,
      amount: transaction.amount,
      transactionType: transaction.transactionType,
      transactionStatus: transaction.transactionStatus,
      createdAt: new Date(transaction.createdAt).toLocaleDateString(),
    })) ?? [];
  const totalPages = Math.ceil(Number(data?.totalCount) / limit);

  return (
    <Wrapper className="max-w-full w-full space-y-7 overflow-unset">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.admin.creditsAndTransactions.overview.heading}
      </Typography>

      <Actions />

      {isLoading ? (
        <TableSkeleton length={rows.length > 0 ? rows.length : 2} />
      ) : (
        rows.length > 0 && (
          <Table<CreditsAndTransactionsTableProps>
            data={rows}
            columns={columns}
          />
        )
      )}

      {rows.length > 0 && (
        <Pagination className="justify-end" totalPages={totalPages} />
      )}
    </Wrapper>
  );
}
