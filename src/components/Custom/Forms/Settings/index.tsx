// Imports:
import ButtonSpinner from '@/components/UI/ButtonSpinner';
import InputField from '@/components/UI/InputField';
import SelectField from '@/components/UI/Select';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { useMe, useUpdateProfile } from '@/hooks/auth';
import { useModalStore } from '@/stores/useModalStore';
import { Button, Typography } from '@material-tailwind/react';
import { DollarSign, Globe, Mail, Phone, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function SettingsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timezone, setTimezone] = useState('');
  const [disputeFeeAmount, setDisputeFeeAmount] = useState('0');

  const timeZones = Intl.supportedValuesOf('timeZone');
  const { data, isError, error } = useMe();
  const { mutate: updateProfile, isPending } = useUpdateProfile();
  const { openModal } = useModalStore();

  function handleTrigger() {
    openModal('ChangePassword');
    return;
  }

  useEffect(() => {
    if (data?.user) {
      setName(data.user.name);
      setEmail(data.user.email);
      setPhone(data.user.phone);
      setTimezone(data.user.timeZone);
      setDisputeFeeAmount(data.user.disputeFeeAmount.toString());
    }

    if (isError) {
      toast.error(error.message);
    }
  }, [data?.user, isError, error?.message]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const updatedUser = {
      name,
      email,
      phone,
      timeZone: timezone,
      disputeFeeAmount: Number(disputeFeeAmount),
    };

    updateProfile(updatedUser);
    return;
  }

  return (
    <Wrapper className="size-full place-content-center max-w-full w-full">
      <form className="overflow-hidden space-y-8" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <Typography
            variant="lead"
            className="text-[28px] text-neutral-800 font-semibold"
          >
            {stormyContent.admin.settings.headingOne}
          </Typography>
          <Button
            className="text-lg text-primary font-semibold p-0 capitalize"
            variant="text"
            type="button"
            onClick={handleTrigger}
          >
            {stormyContent.admin.settings.subHeading}
          </Button>
        </div>

        <div className="space-y-5 overflow-hidden">
          <InputField
            id={stormyContent.admin.settings.form.name.id}
            label={stormyContent.admin.settings.form.name.label}
            type="text"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            icon={<User className="h-6 w-6 text-neutral-700" />}
            required
          />

          <InputField
            id={stormyContent.admin.settings.form.email.id}
            label={stormyContent.admin.settings.form.email.label}
            type="text"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            icon={<Mail className="h-6 w-6 text-neutral-700" />}
            disabled
          />

          <InputField
            id={stormyContent.admin.settings.form.phone.id}
            label={stormyContent.admin.settings.form.phone.label}
            type="text"
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPhone(e.target.value)
            }
            icon={<Phone className="h-6 w-6 text-neutral-700" />}
            required
          />
        </div>

        <Typography
          variant="lead"
          className="text-[28px] text-neutral-800 font-semibold"
        >
          {stormyContent.admin.settings.headingTwo}
        </Typography>

        <div className="space-y-5">
          <SelectField
            id={stormyContent.admin.settings.form.timeZone.id}
            label={stormyContent.admin.settings.form.timeZone.label}
            value={timezone}
            onChange={(value: string) => setTimezone(value)}
            options={timeZones.map((tz) => ({
              label: tz,
              value: tz,
            }))}
            icon={<Globe className="h-6 w-6 text-neutral-700" />}
          />

          <InputField
            id={stormyContent.admin.settings.form.disputeFeeAmount.id}
            label={stormyContent.admin.settings.form.disputeFeeAmount.label}
            type="text"
            value={Number(disputeFeeAmount)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDisputeFeeAmount(e.target.value)
            }
            icon={<DollarSign className="h-6 w-6 text-neutral-700" />}
            required
          />
        </div>
        <div className="overflow-hidden max-w-full">
          <Button
            className="p-3 rounded-lg bg-primary text-xl font-semibold text-core-white w-full capitalize"
            type="submit"
            disabled={
              isPending ||
              !name.trim() ||
              !phone.trim() ||
              !email.trim() ||
              !timezone.trim() ||
              !disputeFeeAmount.trim()
            }
          >
            {isPending ? (
              <ButtonSpinner />
            ) : (
              stormyContent.admin.settings.form.submitButton.text
            )}
          </Button>
        </div>
      </form>
    </Wrapper>
  );
}
