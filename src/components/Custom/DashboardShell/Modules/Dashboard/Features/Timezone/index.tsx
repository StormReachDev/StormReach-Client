// Imports:
import BaseImage from '@/components/UI/Image';
import { imagePaths } from '@/constants/Paths/Images';
import { Typography } from '@material-tailwind/react';
import * as ct from 'countries-and-timezones';
import { format, toZonedTime } from 'date-fns-tz';
import { useEffect, useMemo, useState } from 'react';

export default function TimeZoneDisplay({ timezone }: { timezone: string }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const zonedDate = useMemo(
    () => toZonedTime(date, timezone),
    [date, timezone]
  );

  const formattedDate = useMemo(
    () => format(zonedDate, 'EEEE, MMMM d'),
    [zonedDate]
  );
  const formattedTime = useMemo(() => format(zonedDate, 'h:mm a'), [zonedDate]);

  const offsetHours = useMemo(
    () => -zonedDate.getTimezoneOffset() / 60,
    [zonedDate]
  );
  const offsetString = `GMT${offsetHours >= 0 ? '+' : ''}${offsetHours}`;

  const countryCode = useMemo(() => {
    const country = ct.getTimezone(timezone)?.countries?.[0];
    return country?.toLowerCase();
  }, [timezone]);

  return (
    <div className="w-auto max-w-full py-[10px] px-4 rounded-lg bg-input border border-stroke flex justify-center items-center gap-x-3 overflow-hidden">
      <div>
        <BaseImage
          src={`${imagePaths.dashboard.flag.src}/${countryCode}.png`}
          alt={imagePaths.dashboard.flag.alt}
          width={500}
          height={500}
          className="w-8 rounded-[4px] object-cover aspect-square"
        />
      </div>
      <div className="flex flex-col gap-y-[2px]">
        <Typography
          variant="small"
          className="text-neutral-800 text-base font-semibold"
        >
          {formattedDate}
        </Typography>

        <Typography
          className="text-neutral-600 text-sm font-medium"
          variant="small"
        >
          {formattedTime} ({offsetString})
        </Typography>
      </div>
    </div>
  );
}
