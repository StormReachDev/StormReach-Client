import ButtonSpinner from '@/components/UI/ButtonSpinner';
import CompositeSelectField from '@/components/UI/CompositeSelect';
import stormyContent from '@/constants/Content';
import { useMe } from '@/hooks/auth';
import { useAppointmentsPerDay } from '@/hooks/meta';
import { useUpdateRoofer } from '@/hooks/roofer';
import { useStepperStore } from '@/stores/useStepperStore';
import { Button } from '@material-tailwind/react';
import { CalendarClock } from 'lucide-react';
import { useEffect, useState } from 'react';
import Map from '../../Map';

export default function ServiceAreaForm() {
  const [appointmentsPerDay, setAppointmentsPerDay] = useState<string>('');
  const { data } = useMe();
  const { data: appointmentOptionsList } = useAppointmentsPerDay();
  const { isPending } = useUpdateRoofer();
  const { prevStep } = useStepperStore();

  useEffect(() => {
    if (data?.customer) {
      setAppointmentsPerDay(data.customer.appointmentsPerDay || '');
    }
  }, [data?.customer]);

  const appointmentsPerDayOptions =
    appointmentOptionsList?.appointmentOptions?.map((option) => ({
      label: option.toString(),
      value: option.toString(),
    })) ?? [];

  function handleAppointmentsPerDayChange(value: string | string[]) {
    if (typeof value === 'string') {
      setAppointmentsPerDay(value);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Handle form submission logic here

    return;
  }

  function moveBack() {
    prevStep();
    return;
  }

  return (
    <div className="w-full space-y-10">
      <form className="space-y-7 overflow-hidden" onSubmit={handleSubmit}>
        <CompositeSelectField
          id={stormyContent.cutomer.onboarding.form.appointmentsPerDay.id}
          label={stormyContent.cutomer.onboarding.form.appointmentsPerDay.label}
          value={appointmentsPerDay}
          onChange={handleAppointmentsPerDayChange}
          options={appointmentsPerDayOptions}
          icon={<CalendarClock className="h-6 w-6 text-neutral-700" />}
          fallbackLabel={
            stormyContent.cutomer.onboarding.form.appointmentsPerDay.placeholder
          }
          bgColor="bg-background"
        />

        <Map />

        <div className="overflow-hidden max-w-full flex gap-5">
          <Button
            className="p-3 rounded-xl bg-background border border-stroke text-xl font-bold text-core-white w-full capitalize"
            type="button"
            onClick={moveBack}
          >
            {stormyContent.cutomer.onboarding.form.prevButton.text}
          </Button>
          <Button
            className="p-3 rounded-xl bg-primary text-xl font-bold text-core-white w-full capitalize"
            type="submit"
            disabled={!appointmentsPerDay.trim() || isPending}
          >
            {isPending ? (
              <ButtonSpinner />
            ) : (
              stormyContent.cutomer.onboarding.form.doneButton.text
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
