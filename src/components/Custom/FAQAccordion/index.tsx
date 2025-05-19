// Imports:
import Wrapper from '@/components/Generics/Wrapper';
import AccordionLeft from './AccordionLeft';
import AccordionRight from './AccordionRight';

export default function FAQAccordion() {
  return (
    <Wrapper className="max-w-full sm:min-h-[560px] px-5 py-2 sm:px-[60px] sm:py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] sm:gap-[83px] text-neutral-800 bg-core-black rounded-[20px] h-full px-6 py-8 sm:px-[72px] sm:py-[60px]">
        <AccordionLeft />
        <AccordionRight />
      </div>
    </Wrapper>
  );
}
