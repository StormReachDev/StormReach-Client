// Imports:
import CompositeDropdown from '@/components/UI/CompositeDropDown';
import SearchBar from '@/components/UI/Search';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { useAccountStatuses } from '@/hooks/meta';
import { useFilterStore } from '@/stores/useFilterStore';
import { useModalStore } from '@/stores/useModalStore';
import { Button } from '@material-tailwind/react';
import { PlusCircle, Tag } from 'lucide-react';

export default function Actions() {
  const { keyword, setKeyword, accountStatus, setAccountStatus } =
    useFilterStore();
  const { openModal } = useModalStore();
  const { data: status } = useAccountStatuses();

  function handleTrigger() {
    openModal('AddTeam');
    return;
  }

  const statusOptions =
    (status?.accountStatuses &&
      Object.fromEntries(
        Object.entries(status.accountStatuses).map(([key, value]) => [
          value.label,
          key,
        ])
      )) ??
    {};

  return (
    <Wrapper className="max-w-full w-full overflow-unset">
      <div className="flex gap-5 flex-wrap">
        <div className="overflow-hidden flex-grow min-w-[320px]">
          <SearchBar
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search by team member's name"
          />
        </div>
        <div className="flex gap-3 items-center flex-wrap">
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

          <div className="shrink-0">
            <Button
              className="flex w-full max-w-full items-center gap-2 justify-center py-4 px-[14px] rounded-lg bg-primary text-neutral-700 text-lg font-medium capitalize"
              type="button"
              onClick={handleTrigger}
            >
              <PlusCircle className="text-neutral-700 size-5" />
              {stormyContent.modal.addTeam.trigger}
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
