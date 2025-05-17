// Imports:
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/UI/card';
import { cn } from '@/lib/utils';
import CardProps from '@/types/Card';
import Bullet from '../Bullet';
import Typography from '../Typography';

export default function CardWithIcon({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        'w-[362px] h-fit bg-core-black text-neutral-800 rounded-[18px] py-10 px-7 outline-none space-y-5 overflow-hidden',
        className
      )}
      {...props}
    >
      <CardHeader className="p-0 space-y-0 flex flex-row justify-between items-center text-sm font-medium lowercase">
        <Bullet />
        <Typography variant="small">2 weeks ago</Typography>
      </CardHeader>

      <CardTitle className="font-semibold text-xl">
        Tyler M., Owner, Titan Roofing Co.
      </CardTitle>

      <CardDescription className="overflow-hidden text-lg font-medium text-ellipsis">
        “We used to burn money on shared leads that never converted. With
        StormReach, we closed 6 installs in our first two weeks”
      </CardDescription>
    </Card>
  );
}
