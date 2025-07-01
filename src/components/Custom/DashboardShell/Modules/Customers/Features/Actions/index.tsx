// Imports:
import CompositeDropdown from '@/components/UI/CompositeDropDown';
import SearchBar from '@/components/UI/Search';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { useAccountStatuses, usePlanTypes } from '@/hooks/meta';
import { useSalesAgents } from '@/hooks/salesAgent';
import { useFilterStore } from '@/stores/useFilterStore';
import { useModalStore } from '@/stores/useModalStore';
import { Button } from '@material-tailwind/react';
import { Briefcase, DollarSign, PlusCircle, Tag } from 'lucide-react';

export default function Actions() {
  const {
    keyword,
    setKeyword,
    plan,
    setPlan,
    accountStatus,
    setAccountStatus,
    assignedAgents,
    setAssignedAgents,
  } = useFilterStore();

  const { openModal } = useModalStore();

  const { data: planTypes } = usePlanTypes();
  const { data: status } = useAccountStatuses();
  const { data: agents } = useSalesAgents();

  const planOptions =
    (planTypes?.plans &&
      Object.fromEntries(
        Object.entries(planTypes?.plans).map(([key, value]) => [
          value.name,
          key,
        ])
      )) ??
    {};

  const statusOptions =
    (status?.accountStatuses &&
      Object.fromEntries(
        Object.entries(status.accountStatuses).map(([key, value]) => [
          value.label,
          key,
        ])
      )) ??
    {};

  const salesAgentOptions =
    (agents?.salesAgents && agents.salesAgents.map((agent) => agent.name)) ??
    [];

  function handleTrigger() {
    openModal('AddCustomer');
    return;
  }

  return (
    <Wrapper className="max-w-full w-full flex gap-5 overflow-unset">
      <div className="overflow-hidden max-w-xs w-full">
        <SearchBar
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div className="flex gap-3 items-center flex-wrap flex-1">
        <CompositeDropdown
          options={planOptions}
          selected={plan}
          onChange={setPlan}
          Icon={DollarSign}
          btnClassName="bg-input border border-stroke rounded-lg gap-[10px] py-4 px-[14px]"
          triggerClassName="text-neutral-700 size-5"
          textClassName="text-neutral-700 font-medium text-lg"
          iconClassName="text-neutral-700 size-5"
          optionsClassName="w-full text-lg"
        />

        <CompositeDropdown
          options={statusOptions}
          selected={accountStatus}
          onChange={setAccountStatus}
          Icon={Tag}
          btnClassName="bg-input border border-stroke rounded-lg gap-[10px] py-4 px-[14px]"
          triggerClassName="text-neutral-700 size-5"
          textClassName="text-neutral-700 font-medium text-lg"
          iconClassName="text-neutral-700 size-5"
          optionsClassName="w-full text-lg"
        />

        <CompositeDropdown
          text="Agent"
          options={salesAgentOptions}
          selectedValues={assignedAgents}
          onChange={setAssignedAgents}
          Icon={Briefcase}
          btnClassName="bg-input border border-stroke rounded-lg gap-[10px] py-4 px-[14px]"
          triggerClassName="text-neutral-700 size-5"
          textClassName="text-neutral-700 font-medium text-lg"
          iconClassName="text-neutral-700 size-5"
          optionsClassName="w-full"
          isMulti
        />

        <div className="overflow-hidden flex-grow">
          <Button
            className="flex w-full max-w-full items-center gap-2 justify-center py-4 px-[14px] rounded-lg bg-primary text-neutral-700 text-lg font-medium capitalize"
            type="button"
            onClick={handleTrigger}
          >
            <PlusCircle className="text-neutral-700 size-5" />
            {stormyContent.modal.addCustomer.trigger}
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
