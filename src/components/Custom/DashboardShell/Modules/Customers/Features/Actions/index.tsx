// Imports:
import CompositeDropdown from '@/components/UI/CompositeDropDown';
import SearchBar from '@/components/UI/Search';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { useAccountStatuses, useAllPlans } from '@/hooks/meta';
import { useSalesAgents } from '@/hooks/salesAgent';
import { useModalStore } from '@/stores/useModalStore';
import { Button } from '@material-tailwind/react';
import { Briefcase, DollarSign, PlusCircle, Tag } from 'lucide-react';
import { useState } from 'react';

export default function Actions() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<string>('Plan Type');
  const [selectedStatus, setSelectedStatus] =
    useState<string>('Account Status');
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const { openModal } = useModalStore();

  const { data: planTypes } = useAllPlans();
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
    (agents?.salesAgents &&
      agents.salesAgents.map((agent) => agent.name.split(' ')[0])) ??
    [];

  function handleTrigger() {
    openModal('AddCustomer');
    return;
  }

  return (
    <Wrapper className="max-w-full w-full flex gap-5 overflow-unset">
      <div className="overflow-hidden max-w-xs w-full">
        <SearchBar
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="flex gap-3 items-center flex-wrap flex-1">
        <CompositeDropdown
          options={planOptions}
          selected={selectedPlan}
          onChange={setSelectedPlan}
          Icon={DollarSign}
          btnClassName="bg-input border border-stroke rounded-lg gap-[10px] py-4 px-[14px]"
          triggerClassName="text-neutral-700 size-5"
          textClassName="text-neutral-700 font-medium text-lg"
          iconClassName="text-neutral-700 size-5"
          optionsClassName="w-full text-lg"
        />

        <CompositeDropdown
          options={statusOptions}
          selected={selectedStatus}
          onChange={setSelectedStatus}
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
          selectedValues={selectedAgents}
          onChange={setSelectedAgents}
          Icon={Briefcase}
          btnClassName="bg-input border border-stroke rounded-lg gap-[10px] py-4 px-[14px]"
          triggerClassName="text-neutral-700 size-5"
          textClassName="text-neutral-700 font-medium text-lg"
          iconClassName="text-neutral-700 size-5"
          optionsClassName="w-full"
          isMulti
        />

        <div className="overflow-hidden flex-1">
          <Button
            className="flex w-full items-center gap-2 justify-center py-4 px-[14px] rounded-lg bg-primary text-neutral-700 text-lg font-medium capitalize"
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
