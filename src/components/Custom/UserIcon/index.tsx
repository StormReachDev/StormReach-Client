'use client';

// Imports:
import Wrapper from '@/components/Generics/Wrapper';
import { useMe } from '@/hooks/auth';
import { Typography } from '@material-tailwind/react';
import { UserRound } from 'lucide-react';

export default function UserIcon() {
  const { data } = useMe();

  return (
    <Wrapper className="border border-stroke w-[290px] py-[10px] px-3 flex items-center justify-start gap-3 bg-input rounded-lg">
      <div className="overflow-hidden size-12 p-[10px] flex items-center justify-center bg-red-200 rounded-xl">
        <UserRound className="text-red-800 size-7" />
      </div>

      <div className="flex flex-col items-start gap-[2px] overflow-hidden">
        <Typography
          variant="lead"
          className="text-neutral-800 font-semibold text-xl"
        >
          {data?.user?.name}
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
