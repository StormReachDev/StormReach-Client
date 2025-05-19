// Imports:
import { Button } from '@/components/UI/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/UI/card';
import { pricing } from '@/constants/Paths';
import { cn } from '@/lib/utils';
import { PricingCardProps } from '@/types/Pricing';
import Image from 'next/image';
import Typography from '../Typography';

export default function PricingCard({
  title,
  features,
  price,
  buttonText,
  className,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        'w-full h-full bg-core-black text-neutral-800 rounded-[18px] py-10 px-7 outline-none space-y-5 overflow-hidden flex flex-col',
        className
      )}
    >
      <div className="flex flex-col flex-grow">
        <CardHeader className="p-0 space-y-0 text-[32px] font-semibold">
          <Typography variant="h1">{title}</Typography>
        </CardHeader>

        <CardContent className="p-0 space-y-3 mt-5 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Image
                src={pricing.icon}
                alt={pricing.iconAlt}
                width={24}
                height={24}
                className="mr-3 mt-1 flex-shrink-0"
              />
              <Typography variant="small" className="text-2xl font-medium">
                {feature}
              </Typography>
            </li>
          ))}
        </CardContent>

        <CardDescription className="text-4xl font-bold text-red-700 mt-5">
          <Typography variant="h1">{price}</Typography>
        </CardDescription>
      </div>

      <Button
        variant="default"
        className="h-14 w-full py-4 px-[22px] text-xl font-semibold bg-red-700 mt-5"
      >
        {buttonText}
      </Button>
    </Card>
  );
}
