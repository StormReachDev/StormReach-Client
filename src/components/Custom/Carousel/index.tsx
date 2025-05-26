'use client';

// Imports:
import stormyContent from '@/constants/Content';
import { imagePaths } from '@/constants/Paths/Images';
import { Carousel, Typography } from '@material-tailwind/react';

const slides = [
  {
    image: imagePaths.carousel.first.src,
    alt: imagePaths.carousel.first.alt,
    text: 'Track customers, manage disputes, and keep appointments flowing.',
  },

  {
    image: imagePaths.carousel.second.src,
    alt: imagePaths.carousel.second.alt,
    text: 'From credit balances to agent activity — manage everything in one place.',
  },

  {
    image: imagePaths.carousel.third.src,
    alt: imagePaths.carousel.third.alt,
    text: 'Assign agents, review leads, and handle client needs in seconds.',
  },
];

export function CarouselCustomNavigation() {
  return (
    <Carousel
      loop
      autoplay
      prevArrow={() => <></>}
      nextArrow={() => <></>}
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {Array.from({ length }).map((_, i) => (
            <span
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? 'w-8 bg-primary' : 'w-4 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    >
      {stormyContent.slides.map((slide, index) => (
        <div key={index} className="relative h-full w-full">
          <img
            src={slide.image}
            alt={slide.alt}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-end bg-black/50 px-10 py-10">
            <div className="text-center">
              <Typography
                variant="lead"
                className="text-[28px] font-semibold text-neutral-700"
              >
                {slide.text}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
