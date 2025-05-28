'use client';

// Imports:
import BaseImage from '@/components/Generics/Image';
import Wrapper from '@/components/Generics/Wrapper';
import stormyContent from '@/constants/Content';
import { imagePaths } from '@/constants/Paths/Images';
import { useCountdownStore } from '@/stores/useCountdownStore';
import { Typography } from '@material-tailwind/react';

export default function MobileComingSoon() {
  const { timeLeft } = useCountdownStore();

  return (
    <Wrapper className="h-[calc(100vh-92px)] place-content-center space-y-8">
      <BaseImage
        src={imagePaths.mobile.comingSoon.src}
        alt={imagePaths.mobile.comingSoon.alt}
        className="object-cover max-w-xs mx-auto"
        priority
      />

      <div className="overflow-hidden text-center space-y-3">
        <Typography
          variant="h1"
          className="font-semibold text-[32px] text-neutral-800"
        >
          {stormyContent.mobile.comingSoon.heading}
        </Typography>

        <Typography
          variant="lead"
          className="font-medium text-2xl text-neutral-600"
        >
          {stormyContent.mobile.comingSoon.body}
        </Typography>
      </div>

      <div className="overflow-hidden max-w-full w-[292px] py-5 px-3 rounded-lg bg-primary mx-auto text-core-white text-lg font-semibold text-center">
        {timeLeft.days +
          ' ' +
          'Days:' +
          ' ' +
          timeLeft.hours +
          ' ' +
          'Hr:' +
          ' ' +
          timeLeft.minutes +
          ' ' +
          'Min:' +
          ' ' +
          timeLeft.seconds +
          ' ' +
          'Sec'}
      </div>
    </Wrapper>
  );
}
