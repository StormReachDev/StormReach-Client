'use client';

// Imports:
import BaseImage from '@/components/UI/Image';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { imagePaths } from '@/constants/Paths/Images';
import { Typography } from '@material-tailwind/react';

export default function MobileComingSoon() {
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
    </Wrapper>
  );
}
