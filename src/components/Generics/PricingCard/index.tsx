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
        'w-[406px] h-fit bg-core-black text-neutral-800 rounded-[18px] py-10 px-7 outline-none space-y-5 overflow-hidden',
        className
      )}
    >
      <CardHeader className="p-0 space-y-0">
        <Typography variant="h1" className="text-[32px] font-semibold">
          {title}
        </Typography>
      </CardHeader>

      <CardContent className="p-0 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Image
              src={pricing.icon}
              alt={pricing.iconAlt}
              width={24}
              height={24}
              className="mr-3"
            />
            <Typography variant="small" className="text-2xl font-medium">
              {feature}
            </Typography>
          </li>
        ))}
      </CardContent>

      <CardDescription className="text-4xl font-bold text-red-700 overflow-hidden">
        <Typography variant="h1">{price}</Typography>
      </CardDescription>

      <Button
        variant="default"
        className="w-full py-4 px-[22px] text-xl font-semibold"
      >
        {buttonText}
      </Button>
    </Card>
  );
}
