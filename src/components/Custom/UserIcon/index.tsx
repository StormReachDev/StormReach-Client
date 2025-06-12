'use client';

// Imports:
import IconBadge from '@/components/UI/IconBadge';
import Wrapper from '@/components/UI/Wrapper';
import { useMe } from '@/hooks/auth';
import { truncateByWord } from '@/lib/utils';
import { Typography } from '@material-tailwind/react';
import { UserRound } from 'lucide-react';

export default function UserIcon() {
  const { data } = useMe();

  return (
    <Wrapper className="border border-stroke w-[290px] py-[10px] px-3 flex items-center justify-start gap-3 bg-input rounded-lg">
      <IconBadge
        icon={UserRound}
        className="size-12 p-[10px] rounded-xl border-transparent"
        iconClassName="text-red-800 size-7"
      />

      <div className="flex flex-col items-start gap-[2px] overflow-hidden">
        <Typography
          variant="lead"
          className="text-neutral-800 font-semibold text-xl"
        >
          {truncateByWord(String(data?.user?.name), 20)}
        </Typography>

        <Typography
          variant="small"
          className="text-red-600 font-medium text-base"
        >
          {data?.user?.email}
        </Typography>
      </div>
    </Wrapper>
  );
}
