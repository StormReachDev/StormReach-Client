// Imports:
import Dropdown from '@/components/UI/DropDown';
import MultiDropDown from '@/components/UI/MultiDropDown';
import SearchBar from '@/components/UI/Search';
import Wrapper from '@/components/UI/Wrapper';
import { Button } from '@material-tailwind/react';
import { Briefcase, DollarSign, Tag, UserRound } from 'lucide-react';
import { useState } from 'react';

export default function Actions() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedPlan, setSelectedPlan] = useState<string>('Plan Type');
  const [selectedStatus, setSelectedStatus] =
    useState<string>('Account Status');
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);

  return (
    <Wrapper className="max-w-full w-full flex gap-5 overflow-unset">
      <div className="overflow-hidden max-w-xs w-full">
        <SearchBar
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="flex gap-3 flex-wrap flex-1">
        <Dropdown
          options={{
            'Plan Type': 'Plan Type',
          }}
          selected={selectedPlan}
          onChange={setSelectedPlan}
          Icon={DollarSign}
          btnClassName="bg-input border border-stroke rounded-lg gap-[10px] py-4 px-[14px]"
          triggerClassName="text-neutral-700 size-5"
          textClassName="text-neutral-700 font-medium text-lg"
          iconClassName="text-neutral-700 size-5"
          optionsClassName="w-full text-lg"
        />

        <Dropdown
          options={{
            Active: 'Active',
          }}
          selected={selectedStatus}
          onChange={setSelectedStatus}
          Icon={Tag}
          btnClassName="bg-input border border-stroke rounded-lg gap-[10px] py-4 px-[14px]"
          triggerClassName="text-neutral-700 size-5"
          textClassName="text-neutral-700 font-medium text-lg"
          iconClassName="text-neutral-700 size-5"
          optionsClassName="w-full text-lg"
        />

        <MultiDropDown
          label="Agent"
          options={['Agent 1']}
          selectedValues={selectedAgents}
          onChange={setSelectedAgents}
          Icon={Briefcase}
          btnClassName="bg-input border border-stroke rounded-lg gap-[10px] py-4 px-[14px]"
          triggerClassName="text-neutral-700 size-5"
          textClassName="text-neutral-700 font-medium text-lg"
          iconClassName="text-neutral-700 size-5"
          optionsClassName="w-full"
        />

        <div className="overflow-hidden flex-1">
          <Button className="flex w-full items-center gap-2 justify-center py-4 px-[14px] rounded-lg bg-primary text-neutral-700 text-lg font-medium capitalize">
            <UserRound className="text-neutral-700 size-5" />
            Add Customer
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
