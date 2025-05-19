// Imports:
import Typography from '@/components/Generics/Typography';
import Wrapper from '@/components/Generics/Wrapper';
import stormyLanding from '@/constants/Content';
import { footerIcons, logo } from '@/constants/Paths';
import Image from 'next/image';
import Link from 'next/link';

export default function FooterLower() {
  const {
    footer: {
      lower: { description, navigation, contact },
    },
  } = stormyLanding;

  const { contact: contactIconsData, socials } = footerIcons.lower;

  const contactItems = [
    {
      iconSrc: contactIconsData.email.icon,
      iconAlt: contactIconsData.email.iconAlt,
      value: contact.email,
      width: 20,
      height: 20,
    },
    {
      iconSrc: contactIconsData.phone.icon,
      iconAlt: contactIconsData.phone.iconAlt,
      value: contact.phone,
      width: 20,
      height: 20,
    },
    {
      iconSrc: contactIconsData.location.icon,
      iconAlt: contactIconsData.location.iconAlt,
      value: contact.location,
      width: 16,
      height: 16,
    },
  ];

  return (
    <Wrapper className="max-w-full flex flex-col gap-10 sm:0 sm:flex-row justify-between h-1/2 text-neutral-800 py-10">
      <div className="w-full sm:w-6/12 space-y-5">
        <Image
          src={logo.image}
          alt={logo.alt}
          width={500}
          height={500}
          className="object-cover w-[253px]"
        />
        <Typography variant="p" className="text-lg font-medium">
          {description}
        </Typography>
        <div className="flex space-x-3">
          {socials.map((social, index) => (
            <Image
              key={index}
              src={social.icon}
              alt={social.iconAlt}
              width={33}
              height={33}
              className="hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>

      <div className="w-full sm:w-3/12 space-y-5">
        <Typography variant="h1" className="text-xl font-semibold">
          {navigation.heading}
        </Typography>
        <ul className="space-y-3">
          {navigation.items.map((item, index) => (
            <li
              key={index}
              className="hover:translate-x-2 transition-transform duration-300"
            >
              <Typography variant="p" className="text-lg font-medium">
                <Link
                  key={item.title}
                  href={item.path}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {item.title}
                </Link>
              </Typography>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full sm:w-3/12 space-y-5">
        <Typography variant="h1" className="text-xl font-semibold">
          {contact.heading}
        </Typography>
        <div className="space-y-3">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center hover:translate-x-2 transition-transform duration-300"
            >
              <Image
                src={item.iconSrc}
                alt={item.iconAlt}
                width={item.width}
                height={item.height}
                className="mr-3 hover:text-primary transition-colors duration-300"
              />
              <Typography variant="p" className="text-lg font-medium">
                {item.value}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
