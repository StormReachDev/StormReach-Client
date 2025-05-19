// Imports:
import ButtonWithIcon from '@/components/Generics/ButtonWithIcon';
import Typography from '@/components/Generics/Typography';
import stormyLanding from '@/constants/Content';
import { footerIcons } from '@/constants/Paths';
import Image from 'next/image';

export default function AccordionLeft() {
  const {
    faq: { heading, description, btnText },
  } = stormyLanding;
  const {
    upper: {
      commonArrowIcon: { icon, iconAlt },
    },
  } = footerIcons;

  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-col space-y-5">
        <Typography
          variant="h1"
          className="text-[32px] sm:text-[48px] font-semibold"
        >
          {heading}
        </Typography>
        <Typography variant="p" className="text-lg sm:text-xl font-medium">
          {description}
        </Typography>
      </div>
      <div>
        <ButtonWithIcon
          rightIcon={<Image src={icon} alt={iconAlt} width={25} height={25} />}
          className="bg-primary text-core-white text-lg sm:text-xl font-semibold p-5 h-14 sm:h-[70px] rounded-2xl"
        >
          {btnText}
        </ButtonWithIcon>
      </div>
    </div>
  );
}
