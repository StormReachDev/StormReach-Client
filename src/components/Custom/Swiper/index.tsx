// Imports:
import { swiper } from '@/constants/Paths';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function Swiper() {
  return (
    <Marquee speed={100}>
      {swiper.map((swiper) => (
        <div key={swiper.alt} className="flex items-center size-full px-5">
          <Image
            src={swiper.image}
            alt={swiper.alt}
            width={500}
            height={500}
            className="object-cover w-52 h-full"
          />
        </div>
      ))}
    </Marquee>
  );
}
