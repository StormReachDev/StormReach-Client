// Imports:
import Wrapper from '@/components/UI/Wrapper';
import { Calendar } from 'lucide-react';

export default function NotificationsCardSkeleton({
  length = 3,
}: {
  length?: number;
}) {
  return Array.from({ length }).map((_, index) => (
    <Wrapper
      className="bg-input border border-stroke rounded-xl p-4 overflow-hidden"
      key={index}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="size-10 px-[10px] py-2 rounded-lg border-transparent bg-stroke animate-pulse" />
        </div>
        <div className="flex items-center gap-2 text-neutral-600">
          <Calendar className="w-5 h-5 text-stroke" />
        </div>
      </div>
    </Wrapper>
  ));
}
