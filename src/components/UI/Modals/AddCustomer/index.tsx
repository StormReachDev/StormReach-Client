// Imports:
import stormyContent from '@/constants/Content';
import { usePlanTypes } from '@/hooks/meta';
import { usePurchasePlan } from '@/hooks/plan';
import { useSalesAgents } from '@/hooks/salesAgent';
import { useModalStore } from '@/stores/useModalStore';
import { useSidebarStore } from '@/stores/useSidebarStore';
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from '@material-tailwind/react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {
  DollarSign,
  Globe,
  Landmark,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ButtonSpinner from '../../ButtonSpinner';
import CompositeSelectField from '../../CompositeSelect';
import FlowIndicator from '../../FlowIndicator';
import InputField from '../../InputField';

export default function AddCustomerModal() {
  const { modal, closeModal } = useModalStore();
  const { activeItem } = useSidebarStore();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    billingAddress: '',
    zipCode: '',
  });
  const [cardComplete, setCardComplete] = useState(false);

  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string>(
    stormyContent.modal.addCustomer.form.planType.defaultValue
  );

  const [timezone, setTimezone] = useState<string>(
    stormyContent.modal.addCustomer.form.timeZone.defaultValue
  );

  const { data: planTypes } = usePlanTypes();
  const { data: agents } = useSalesAgents();
  const timeZones = Intl.supportedValuesOf('timeZone');

  const stripe = useStripe();
  const elements = useElements();
  const { mutate, isPending } = usePurchasePlan();

  if (modal !== 'AddCustomer') return null;

  const planOptions =
    (planTypes?.plans &&
      Object.entries(planTypes?.plans)
        .filter(([_, value]) => value.name !== 'Dispute Resolution')
        .map(([key, value]) => ({
          label: value.name,
          value: key,
        }))) ??
    [];

  const salesAgentOptions =
    (agents?.salesAgents &&
      agents.salesAgents
        .filter((agent) => agent.status !== 'paused')
        .map((agent) => ({
          label: agent.name,
          value: agent._id,
        }))) ??
    [];

  const timeZoneOptions = timeZones.map((zone) => ({
    label: zone,
    value: zone,
  }));

  function handlePlanChange(value: string | string[]) {
    if (typeof value === 'string') {
      setSelectedPlan(value);
    }
  }

  function handleTimezoneChange(value: string | string[]) {
    if (typeof value === 'string') {
      setTimezone(value);
    }
  }

  function handleAgentsChange(value: string | string[]) {
    if (Array.isArray(value)) {
      setSelectedAgents(value);
    }
  }

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error('Stripe is not initialized. Please try again.');
      return;
    }

    const cardEl = elements.getElement(CardElement);

    if (!cardEl) {
      toast.error('Something went wrong. Please try again.');
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardEl,
      billing_details: {
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: {
          line1: form.billingAddress,
          postal_code: form.zipCode,
        },
      },
      metadata: {
        timezone,
      },
    });

    if (error) {
      toast.error('Please check your card details and try again.');
      return;
    }

    const customerData = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      companyName: form.companyName === '' ? undefined : form.companyName,
      billingAddress: form.billingAddress,
      zipCode: form.zipCode,
      timeZone: timezone,
      plan: selectedPlan,
      agents: selectedAgents,
      priceId:
        planTypes?.plans?.[selectedPlan as keyof typeof planTypes.plans]
          ?.priceId,
      paymentMethodId: paymentMethod?.id,
    };

    mutate(customerData, {
      onSuccess: () => {
        closeModal();
        cardEl.clear();
        setForm({
          name: '',
          email: '',
          phone: '',
          companyName: '',
          billingAddress: '',
          zipCode: '',
        });
        setSelectedAgents([]);
        setSelectedPlan(
          stormyContent.modal.addCustomer.form.planType.defaultValue
        );
        setTimezone(stormyContent.modal.addCustomer.form.timeZone.defaultValue);
      },
    });
  }

  return (
    <>
      <Dialog
        open={!!modal}
        handler={closeModal}
        className="w-full outline-none rounded-[20px] border border-stroke bg-input p-10 space-y-10"
        size="md"
      >
        <DialogHeader className="overflow-hidden p-0 space-y-2 flex flex-col items-start">
          <Typography
            variant="lead"
            className="text-3xl font-semibold text-neutral-800"
          >
            {stormyContent.modal.addCustomer.heading}
          </Typography>
          <FlowIndicator parent={activeItem} child="Add Customer" />
        </DialogHeader>
        <DialogBody className="p-0">
          <form
            className="space-y-7 max-h-[60vh] overflow-y-auto scrollbar-hide"
            onSubmit={handleSubmit}
          >
            <InputField
              id={stormyContent.modal.addCustomer.form.name.id}
              label={stormyContent.modal.addCustomer.form.name.label}
              type="text"
              placeholder={
                stormyContent.modal.addCustomer.form.name.placeholder
              }
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              icon={<UserRound className="h-6 w-6 text-neutral-700" />}
              required
            />

            <InputField
              id={stormyContent.modal.addCustomer.form.email.id}
              label={stormyContent.modal.addCustomer.form.email.label}
              placeholder={
                stormyContent.modal.addCustomer.form.email.placeholder
              }
              type="text"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              icon={<Mail className="h-6 w-6 text-neutral-700" />}
              required
            />

            <InputField
              id={stormyContent.modal.addCustomer.form.phone.id}
              label={stormyContent.modal.addCustomer.form.phone.label}
              placeholder={
                stormyContent.modal.addCustomer.form.phone.placeholder
              }
              type="text"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              icon={<Phone className="h-6 w-6 text-neutral-700" />}
              required
            />

            <InputField
              id={stormyContent.modal.addCustomer.form.companyName.id}
              label={stormyContent.modal.addCustomer.form.companyName.label}
              placeholder={
                stormyContent.modal.addCustomer.form.companyName.placeholder
              }
              type="text"
              value={form.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              icon={<Landmark className="h-6 w-6 text-neutral-700" />}
            />

            <InputField
              id={stormyContent.modal.addCustomer.form.billingAddress.id}
              label={stormyContent.modal.addCustomer.form.billingAddress.label}
              placeholder={
                stormyContent.modal.addCustomer.form.billingAddress.placeholder
              }
              type="text"
              value={form.billingAddress}
              onChange={(e) => handleChange('billingAddress', e.target.value)}
              icon={<MapPin className="h-6 w-6 text-neutral-700" />}
              required
            />

            <InputField
              id={stormyContent.modal.addCustomer.form.zipCode.id}
              label={stormyContent.modal.addCustomer.form.zipCode.label}
              placeholder={
                stormyContent.modal.addCustomer.form.zipCode.placeholder
              }
              type="text"
              value={form.zipCode}
              onChange={(e) => handleChange('zipCode', e.target.value)}
              icon={<MapPin className="h-6 w-6 text-neutral-700" />}
              required
            />

            <CompositeSelectField
              id={stormyContent.admin.settings.form.timeZone.id}
              label={stormyContent.admin.settings.form.timeZone.label}
              value={timezone}
              onChange={handleTimezoneChange}
              options={timeZoneOptions}
              icon={<Globe className="h-6 w-6 text-neutral-700" />}
            />

            <CompositeSelectField
              id={stormyContent.modal.addCustomer.form.planType.id}
              label={stormyContent.modal.addCustomer.form.planType.label}
              value={selectedPlan}
              onChange={handlePlanChange}
              options={planOptions}
              icon={<DollarSign className="h-6 w-6 text-neutral-700" />}
            />

            <CompositeSelectField
              id={stormyContent.modal.addCustomer.form.addAgents.id}
              label={stormyContent.modal.addCustomer.form.addAgents.label}
              value={selectedAgents}
              onChange={handleAgentsChange}
              options={salesAgentOptions}
              isMulti={true}
              icon={<UserRound className="h-6 w-6 text-neutral-700" />}
              fallbackLabel={
                stormyContent.modal.addCustomer.form.addAgents.fallbackLabel
              }
            />

            <div className="w-full max-w-full space-y-5">
              <label
                htmlFor={stormyContent.modal.addCustomer.form.card.id}
                className={`text-xl font-semibold capitalize block text-neutral-700`}
              >
                {stormyContent.modal.addCustomer.form.card.label}
              </label>
              <CardElement
                id={stormyContent.modal.addCustomer.form.card.id}
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

            <div className="max-w-full overflow-hidden ">
              <Button
                className="p-3 rounded-lg bg-primary text-xl font-semibold text-core-white w-full capitalize"
                type="submit"
                disabled={
                  !form.name.trim() ||
                  !form.email.trim() ||
                  !form.phone.trim() ||
                  !form.billingAddress.trim() ||
                  !form.zipCode.trim() ||
                  !selectedPlan.trim() ||
                  !timezone.trim() ||
                  selectedAgents.length === 0 ||
                  !cardComplete ||
                  isPending
                }
              >
                {isPending ? (
                  <ButtonSpinner />
                ) : (
                  stormyContent.modal.addCustomer.form.submitButton.text
                )}
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
