// Imports:
import ButtonSpinner from '@/components/UI/ButtonSpinner';
import {
  default as CompositeSelectField,
  default as SelectField,
} from '@/components/UI/CompositeSelect';
import InputField from '@/components/UI/InputField';
import Toggle from '@/components/UI/Toggle';
import Wrapper from '@/components/UI/Wrapper';
import stormyContent from '@/constants/Content';
import { PlanKeys } from '@/constants/Keys';
import { useMe } from '@/hooks/auth';
import { usePlanTypes } from '@/hooks/meta';
import { useUpdateRoofer } from '@/hooks/roofer';
import { useModalStore } from '@/stores/useModalStore';
import { Button, Typography } from '@material-tailwind/react';
import { CardElement } from '@stripe/react-stripe-js';
import {
  Building,
  Building2,
  DollarSign,
  Globe,
  Landmark,
  Mail,
  MapPin,
  Phone,
  User,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function RooferSettingsForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    businessAddress: '',
    billingAddress: '',
    zipCode: '',
  });

  const [selectedPlan, setSelectedPlan] = useState<string>();
  const [timezone, setTimezone] = useState('');
  const [_cardComplete, setCardComplete] = useState(false);
  const [checked, setChecked] = useState(false);

  const timeZones = Intl.supportedValuesOf('timeZone');
  const { data, isError, error } = useMe();
  const { data: planTypes } = usePlanTypes();
  const { openModal } = useModalStore();

  const { mutate, isPending: isUpdatingRoofer } = useUpdateRoofer();

  function handleTrigger() {
    openModal('ChangePassword');
    return;
  }

  useEffect(() => {
    if (data?.user) {
      setForm({
        name: data.user.name,
        email: data.user.email,
        phone: data.user.phone,
        companyName: data.customer?.companyName || '',
        businessAddress: data.customer?.businessAddress || '',
        billingAddress: data.customer?.billingAddress || '',
        zipCode: data.customer?.zipCode || '',
      });

      setChecked(Boolean(data.customer?.sameAsBusinessAddress));
      setSelectedPlan(PlanKeys[data.customer?.plan as keyof typeof PlanKeys]);
      setTimezone(data.user.timeZone);
    }

    if (isError) {
      toast.error(error.message);
    }
  }, [data, isError, error?.message]);

  const planOptions =
    (planTypes?.plans &&
      Object.entries(planTypes?.plans)
        .filter(([_, value]) => value.name !== 'Dispute Resolution')
        .map(([key, value]) => ({
          label: value.name,
          value: key,
        }))) ??
    [];

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handlePlanChange(value: string | string[]) {
    if (typeof value === 'string') {
      setSelectedPlan(value);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData();

    formData.set('name', form.name);
    formData.set('phone', form.phone);
    formData.set('timeZone', timezone);
    formData.set('companyName', form.companyName);
    formData.set('businessAddress', form.businessAddress);
    formData.set('billingAddress', form.billingAddress);
    formData.set('zipCode', form.zipCode);
    formData.set('sameAsBusinessAddress', String(checked));

    mutate({
      id: String(data?.customer?._id),
      data: formData,
    });
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
            {stormyContent.cutomer.settings.headingOne}
          </Typography>
          <Button
            className="text-lg text-primary font-semibold p-0 capitalize"
            variant="text"
            type="button"
            onClick={handleTrigger}
          >
            {stormyContent.cutomer.settings.subHeading}
          </Button>
        </div>

        <div className="space-y-5 overflow-hidden">
          <InputField
            id={stormyContent.cutomer.settings.form.name.id}
            label={stormyContent.cutomer.settings.form.name.label}
            placeholder={stormyContent.cutomer.settings.form.name.placeholder}
            type="text"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            icon={<User className="h-6 w-6 text-neutral-700" />}
            required
          />

          <InputField
            id={stormyContent.cutomer.settings.form.email.id}
            label={stormyContent.cutomer.settings.form.email.label}
            placeholder={stormyContent.cutomer.settings.form.email.placeholder}
            type="text"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            icon={<Mail className="h-6 w-6 text-neutral-700" />}
            disabled
          />

          <InputField
            id={stormyContent.cutomer.settings.form.phone.id}
            label={stormyContent.cutomer.settings.form.phone.label}
            placeholder={stormyContent.cutomer.settings.form.phone.placeholder}
            type="text"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            icon={<Phone className="h-6 w-6 text-neutral-700" />}
            required
          />

          <SelectField
            id={stormyContent.cutomer.settings.form.timeZone.id}
            label={stormyContent.cutomer.settings.form.timeZone.label}
            value={timezone}
            onChange={(value: string | string[]) =>
              setTimezone(value as string)
            }
            options={timeZones.map((tz) => ({
              label: tz,
              value: tz,
            }))}
            icon={<Globe className="h-6 w-6 text-neutral-700" />}
          />

          <div className="w-full max-w-full space-y-5">
            <label
              htmlFor={stormyContent.cutomer.settings.form.cardNumber.id}
              className={`text-xl font-semibold capitalize block text-neutral-700`}
            >
              {stormyContent.cutomer.settings.form.cardNumber.label}
            </label>

            <CardElement
              id={stormyContent.cutomer.settings.form.cardNumber.id}
              onChange={(e) => setCardComplete(e.complete)}
              className="w-full border border-stroke py-4 pl-3 pr-3 bg-input rounded-xl"
              options={{
                hidePostalCode: true,
                iconStyle: 'solid',
                style: {
                  base: {
                    fontSize: '18px',
                    fontWeight: '500',
                    fontFamily: 'DM Sans, sans-serif',
                    iconColor: '#e5e5e5',
                    color: '#e5e5e5',
                    '::placeholder': {
                      color: '#bfbfbf',
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        <Typography
          variant="lead"
          className="text-[28px] text-neutral-800 font-semibold"
        >
          {stormyContent.cutomer.settings.headingTwo}
        </Typography>

        <div className="space-y-5">
          <InputField
            id={stormyContent.cutomer.settings.form.companyName.id}
            label={stormyContent.cutomer.settings.form.companyName.label}
            placeholder={
              stormyContent.cutomer.settings.form.companyName.placeholder
            }
            type="text"
            value={form.companyName}
            onChange={(e) => handleChange('companyName', e.target.value)}
            icon={<Landmark className="h-6 w-6 text-neutral-700" />}
            required
          />

          <CompositeSelectField
            id={stormyContent.modal.editCustomer.form.planType.id}
            label={stormyContent.modal.editCustomer.form.planType.label}
            value={selectedPlan ?? ''}
            onChange={handlePlanChange}
            options={planOptions}
            icon={<DollarSign className="h-6 w-6 text-neutral-700" />}
            disabled={Number(data?.customer?.appointmentCredits) > 0}
          />

          <InputField
            id={stormyContent.cutomer.settings.form.businessAddress.id}
            label={stormyContent.cutomer.settings.form.businessAddress.label}
            placeholder={
              stormyContent.cutomer.settings.form.businessAddress.placeholder
            }
            type="text"
            value={form.businessAddress}
            onChange={(e) => handleChange('businessAddress', e.target.value)}
            icon={<Building2 className="h-6 w-6 text-neutral-700" />}
            required
          />

          {!checked && (
            <InputField
              id={stormyContent.cutomer.settings.form.billingAddress.id}
              label={stormyContent.cutomer.settings.form.billingAddress.label}
              placeholder={
                stormyContent.cutomer.settings.form.billingAddress.placeholder
              }
              type="text"
              value={form.billingAddress}
              onChange={(e) => handleChange('billingAddress', e.target.value)}
              icon={<Building className="h-6 w-6 text-neutral-700" />}
              required
            />
          )}

          <Toggle
            id={stormyContent.cutomer.settings.form.billingAddressToggle.id}
            title={
              stormyContent.cutomer.settings.form.billingAddressToggle.label
            }
            value={checked}
            onChange={() => setChecked(!checked)}
          />

          <InputField
            id={stormyContent.cutomer.settings.form.zipCode.id}
            label={stormyContent.cutomer.settings.form.zipCode.label}
            placeholder={
              stormyContent.cutomer.settings.form.zipCode.placeholder
            }
            type="text"
            value={form.zipCode}
            onChange={(e) => handleChange('zipCode', e.target.value)}
            icon={<MapPin className="h-6 w-6 text-neutral-700" />}
            required
          />
        </div>
        <div className="overflow-hidden max-w-full">
          <Button
            className="p-3 rounded-xl bg-primary text-xl font-semibold text-core-white w-full capitalize"
            type="submit"
            disabled={
              isUpdatingRoofer ||
              !form.name.trim() ||
              !form.phone.trim() ||
              !form.email.trim() ||
              !timezone.trim() ||
              !form.companyName.trim() ||
              !form.businessAddress.trim() ||
              !form.zipCode.trim() ||
              (!checked && !form.billingAddress.trim())
            }
          >
            {isUpdatingRoofer ? (
              <ButtonSpinner />
            ) : (
              stormyContent.cutomer.settings.form.submitButton.text
            )}
          </Button>
        </div>
      </form>
    </Wrapper>
  );
}
