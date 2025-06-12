// Imports:
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { Typography } from '@material-tailwind/react';
import Actions from '../Actions';

export default function Overview() {
  return (
    <Wrapper className="max-w-full w-full space-y-7 overflow-unset">
      <Typography
        variant="lead"
        className="text-neutral-800 font-semibold text-[28px]"
      >
        {stormyContent.admin.customers.overview.heading}
      </Typography>
      <Actions />
    </Wrapper>
  );
}
