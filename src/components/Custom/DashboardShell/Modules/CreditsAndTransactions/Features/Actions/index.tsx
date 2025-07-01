// Imports:
import CompositeDropdown from '@/components/UI/CompositeDropDown';
import SearchBar from '@/components/UI/Search';
import Wrapper from '@/components/UI/Wrapper';
import { useTransactionStatuses, useTransactionTypes } from '@/hooks/meta';
import { useFilterStore } from '@/stores/useFilterStore';
import { DollarSign, Tag } from 'lucide-react';

export default function Actions() {
  const {
    keyword,
    setKeyword,
    transactionType,
    setTransactionType,
    transactionStatus,
    setTransactionStatus,
  } = useFilterStore();

  const { data: types } = useTransactionTypes();
  const { data: status } = useTransactionStatuses();

  const transactionTypeOptions =
    (types?.transactionTypes &&
      Object.fromEntries(
        Object.entries(types?.transactionTypes).map(([key, value]) => [
          value.label,
          key,
        ])
      )) ??
    {};

  const transactionStatusOptions =
    (status?.transactionStatuses &&
      Object.fromEntries(
        Object.entries(status.transactionStatuses).map(([key, value]) => [
          value.label,
          key,
        ])
      )) ??
    {};

  return (
    <Wrapper className="max-w-full w-full flex gap-5 overflow-unset">
      <div className="overflow-hidden max-w-3xl w-full">
        <SearchBar
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search by customer name or status"
        />
      </div>
      <div className="flex gap-3 items-center flex-wrap flex-1">
        <CompositeDropdown
          options={transactionTypeOptions}
          selected={transactionType}
          onChange={setTransactionType}
          Icon={DollarSign}
          className="flex-1"
          btnClassName="w-full justify-between bg-input border border-stroke rounded-lg gap-[10px] py-4 px-[14px]"
          triggerClassName="text-neutral-700 size-5"
          textClassName="text-neutral-700 font-medium text-lg"
          iconClassName="text-neutral-700 size-5"
          optionsClassName="w-full text-lg"
        />

        <CompositeDropdown
          options={transactionStatusOptions}
          selected={transactionStatus}
          onChange={setTransactionStatus}
          Icon={Tag}
          className="flex-1"
          btnClassName="w-full justify-between bg-input border border-stroke rounded-lg gap-[10px] py-4 px-[14px]"
          triggerClassName="text-neutral-700 size-5"
          textClassName="text-neutral-700 font-medium text-lg"
          iconClassName="text-neutral-700 size-5"
          optionsClassName="w-full text-lg"
        />
      </div>
    </Wrapper>
  );
}
