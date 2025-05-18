// Imports:
import Typography from '@/components/Generics/Typography';
import Wrapper from '@/components/Generics/Wrapper';
import Image from 'next/image';

import stormyLanding from '@/constants/Content';
import { footerIcons, logo } from '@/constants/Paths';
import Link from 'next/link';

export default function FooterLower() {
  const {
    footer: {
      lower: { description, navigation, contact },
    },
  } = stormyLanding;
  const { contact: contactIconsData, socials } = footerIcons.lower;

  return (
    <Wrapper className="max-w-full flex flex-col sm:flex-row justify-between h-1/2 text-neutral-800 border-blue-500 border py-10">
      <div className="w-full sm:w-6/12 space-y-5 border-orange-600 border">
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
        <div className="flex space-x-3 border border-red-500 overflow-hidden">
          {socials.map((social, index) => (
            <Image
              key={index}
              src={social.icon}
              alt={social.iconAlt}
              width={33}
              height={33}
            />
          ))}
        </div>
      </div>

      <div className="w-full sm:w-3/12 border-yellow-600 border space-y-5">
        <Typography variant="h1" className="text-xl font-semibold">
          {navigation.heading}
        </Typography>
        <ul className="space-y-3">
          {navigation.items.map((item, index) => (
            <li key={index}>
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

      <div className="w-full sm:w-3/12 space-y-5 border-green-600 border">
        <Typography variant="h1" className="text-xl font-semibold">
          {contact.heading}
        </Typography>
        <div className="space-y-3">
          <div className="flex items-center">
            <Image
              src={contactIconsData.phone.icon}
              alt={contactIconsData.email.iconAlt}
              width={24}
              height={24}
              className="mr-3"
            />
            <Typography variant="p" className="text-lg font-medium">
              {contact.email}
            </Typography>
          </div>
          <div className="flex items-center">
            <Image
              src={contactIconsData.phone.icon}
              alt={contactIconsData.phone.iconAlt}
              width={24}
              height={24}
              className="mr-3"
            />
            <Typography variant="p" className="text-lg font-medium">
              {contact.phone}
            </Typography>
          </div>
          <div className="flex items-center">
            <Image
              src={contactIconsData.location.icon}
              alt={contactIconsData.location.iconAlt}
              width={24}
              height={24}
              className="mr-3"
            />
            <Typography variant="p" className="text-lg font-medium">
              {contact.location}
            </Typography>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
