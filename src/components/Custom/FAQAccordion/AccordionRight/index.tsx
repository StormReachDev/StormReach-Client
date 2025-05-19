// Imports:
import Typography from '@/components/Generics/Typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/UI/accordion';
import stormyLanding from '@/constants/Content';

export default function AccordionRight() {
  const {
    faq: { accordionItems },
  } = stormyLanding;

  return (
    <Accordion
      type="single"
      defaultValue="item-0"
      collapsible
      className="space-y-2"
    >
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="sm:px-5 border-neutral-800"
        >
          <AccordionTrigger className="text-left hover:no-underline">
            <Typography
              variant="h1"
              className="text-lg sm:text-xl font-semibold"
            >
              {item.question}
            </Typography>
          </AccordionTrigger>
          <AccordionContent>
            <Typography variant="p" className="text-base sm:text-lg">
              {item.answer}
            </Typography>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
