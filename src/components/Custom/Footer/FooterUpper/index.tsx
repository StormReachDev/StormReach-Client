// Imports:
import ButtonWithIcon from '@/components/Generics/ButtonWithIcon';
import Typography from '@/components/Generics/Typography';
import Wrapper from '@/components/Generics/Wrapper';
import Image from 'next/image';

import stormyLanding from '@/constants/Content';
import { footerIcons } from '@/constants/Paths';

export default function FooterUpper() {
  const {
    footer: {
      upper: { heading, description, btnText },
    },
  } = stormyLanding;

  const {
    upper: {
      background: { image, alt },
      commonArrowIcon: { icon, iconAlt },
    },
  } = footerIcons;

  return (
    <Wrapper className="text-neutral-800 relative max-w-full grid grid-cols-1 lg:grid-cols-2 h-1/2 gap-10 lg:gap-0">
      <Image
        src={image}
        alt={alt}
        width={500}
        height={500}
        className="absolute object-cover size-full"
        priority
      />

      <div className="relative w-full my-auto space-y-5">
        <Typography
          variant="h1"
          className="text-[32px] sm:text-[40px] font-semibold"
        >
          {heading}
        </Typography>
        <Typography
          variant="p"
          className="text-[28px] sm:text-xl font-semibold"
        >
          {description}
        </Typography>
      </div>

      <div className="relative w-full flex items-center justify-start lg:justify-end">
        <ButtonWithIcon
          rightIcon={<Image src={icon} alt={iconAlt} width={25} height={25} />}
          className="bg-primary text-core-white text-lg sm:text-xl font-semibold p-5 h-[70px]"
        >
          {btnText}
        </ButtonWithIcon>
      </div>
    </Wrapper>
  );
}
