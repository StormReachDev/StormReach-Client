// Imports:
import { Pagination } from '@/components/UI/Pagination';
import TableSkeleton from '@/components/UI/Skeletons/Table';
import Table from '@/components/UI/Table';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { AppointmentCreditKeys } from '@/constants/Keys';
import { columns as BillingColumns } from '@/constants/Table/RooferColumns/Billing';
import { useMe } from '@/hooks/auth';
import { useCustomerTransactions } from '@/hooks/roofer';
import { useFilterStore } from '@/stores/useFilterStore';
import { RooferBillingsTableProps } from '@/types/UI/Table';
import { Typography } from '@material-tailwind/react';
import { useMemo } from 'react';
import Actions from '../Actions';

export default function Overview() {
  const { keyword, transactionType, transactionStatus, page, limit } =
    useFilterStore();

  const { data: currentUser } = useMe();
  const { data, isLoading } = useCustomerTransactions(
    currentUser?.customer?._id ?? '',
    keyword.trim(),
    transactionType.trim(),
    transactionStatus.trim(),
    page,
    limit
  );

  const columns = useMemo(() => BillingColumns, []);
  const rows =
    data?.transactions.map((transaction) => ({
      id: transaction._id,
      creditsPurchased:
        transaction.transactionStatus === 'disputed'
          ? '+' + 1
          : AppointmentCreditKeys[
              transaction.plan as keyof typeof AppointmentCreditKeys
            ],
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
        {stormyContent.cutomer.billingsAndPlans.overview.heading}
      </Typography>

      <Actions />

      {isLoading ? (
        <TableSkeleton length={rows.length > 0 ? rows.length : 2} />
      ) : (
        rows.length > 0 && (
          <Table<RooferBillingsTableProps> data={rows} columns={columns} />
        )
      )}

      {rows.length > 0 && (
        <Pagination className="justify-end" totalPages={totalPages} />
      )}
    </Wrapper>
  );
}
