// Imports:
import stormyContent from '@/constants/Content';
import { PlanKeys } from '@/constants/Keys';
import { useAccountStatuses, usePlanTypes } from '@/hooks/meta';
import { useRoofer, useUpdateRoofer } from '@/hooks/roofer';
import { useSalesAgents } from '@/hooks/salesAgent';
import { useModalStore } from '@/stores/useModalStore';
import { useSidebarStore } from '@/stores/useSidebarStore';
import { useTableStore } from '@/stores/useTableStore';
import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from '@material-tailwind/react';
import {
  DollarSign,
  Globe,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Tag,
  UserRound,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import ButtonSpinner from '../../ButtonSpinner';
import RemovableChip from '../../Chip';
import CompositeSelectField from '../../CompositeSelect';
import FlowIndicator from '../../FlowIndicator';
import InputField from '../../InputField';

export default function EditCustomerModal() {
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

  const { selectedId, setId } = useTableStore();
  const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<string>();
  const [timezone, setTimezone] = useState<string>();
  const [status, setStatus] = useState<string>();

  const { data: roofer } = useRoofer(String(selectedId));
  const { data: planTypes } = usePlanTypes();
  const { data: agents } = useSalesAgents();
  const { data: accountStatus } = useAccountStatuses();
  const timeZones = Intl.supportedValuesOf('timeZone');

  const { mutate, isPending } = useUpdateRoofer();

  useEffect(() => {
    if (roofer?.roofer) {
      setForm({
        name: roofer.roofer.customer.user.name,
        email: roofer.roofer.customer.user.email,
        phone: roofer.roofer.customer.user.phone,
        companyName: roofer.roofer.customer.companyName || '',
        billingAddress: roofer.roofer.payment.billingAddress,
        zipCode: roofer.roofer.payment.zipCode,
      });

      setStatus(roofer.roofer.customer.user.status);
      setSelectedPlan(
        PlanKeys[roofer.roofer.customer.plan as keyof typeof PlanKeys]
      );
      setTimezone(roofer.roofer.customer.user.timeZone);
      setSelectedAgents(
        roofer.roofer.customer.assignedAgents?.map((agent) => agent._id) || []
      );
    }
  }, [roofer?.roofer]);

  const planOptions = useMemo(
    () =>
      planTypes?.plans
        ? Object.entries(planTypes.plans).map(([key, value]) => ({
            label: value.name,
            value: key,
          }))
        : [],
    [planTypes?.plans]
  );

  const salesAgentOptions = useMemo(
    () =>
      agents?.salesAgents
        ? agents?.salesAgents &&
          agents.salesAgents
            .filter((agent) => agent.status !== 'paused')
            .map((agent) => ({
              label: agent.name,
              value: agent._id,
            }))
        : [],
    [agents?.salesAgents]
  );

  const timeZoneOptions = useMemo(
    () => timeZones.map((zone) => ({ label: zone, value: zone })),
    [timeZones]
  );

  const statusOptions = useMemo(
    () =>
      accountStatus?.accountStatuses
        ? accountStatus.accountStatuses.map((status) => ({
            label: status.label,
            value: status.value,
          }))
        : [],
    [accountStatus?.accountStatuses]
  );

  if (modal !== 'EditCustomer') return null;

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

  function handleStatusChange(value: string | string[]) {
    if (typeof value === 'string') {
      setStatus(value);
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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData();

    formData.set('name', form.name);
    formData.set('phone', form.phone);
    formData.set('companyName', form.companyName);
    formData.set('billingAddress', form.billingAddress);
    formData.set('zipCode', form.zipCode);
    formData.set('timeZone', String(timezone));
    formData.set('status', String(status));
    formData.set('agents', JSON.stringify(selectedAgents));

    mutate(
      {
        id: String(selectedId),
        data: formData,
      },

      {
        onSuccess: () => {
          closeModal();
          setId('');
        },
      }
    );
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
            {stormyContent.modal.editCustomer.heading}
          </Typography>
          <FlowIndicator parent={activeItem} child="Edit Customer" />
        </DialogHeader>
        <DialogBody className="p-0">
          <form
            className="space-y-7 max-h-[60vh] overflow-y-auto scrollbar-hide"
            onSubmit={handleSubmit}
          >
            <InputField
              id={stormyContent.modal.editCustomer.form.name.id}
              label={stormyContent.modal.editCustomer.form.name.label}
              type="text"
              placeholder={
                stormyContent.modal.editCustomer.form.name.placeholder
              }
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              icon={<UserRound className="h-6 w-6 text-neutral-700" />}
              required
            />

            <CompositeSelectField
              id={stormyContent.modal.editCustomer.form.selectStatus.id}
              label={stormyContent.modal.editCustomer.form.selectStatus.label}
              value={status ?? ''}
              onChange={handleStatusChange}
              options={statusOptions}
              icon={<Tag className="h-6 w-6 text-neutral-700" />}
            />

            <InputField
              id={stormyContent.modal.editCustomer.form.email.id}
              label={stormyContent.modal.editCustomer.form.email.label}
              placeholder={
                stormyContent.modal.editCustomer.form.email.placeholder
              }
              type="text"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              icon={<Mail className="h-6 w-6 text-neutral-700" />}
              required
              disabled
            />

            <InputField
              id={stormyContent.modal.editCustomer.form.phone.id}
              label={stormyContent.modal.editCustomer.form.phone.label}
              placeholder={
                stormyContent.modal.editCustomer.form.phone.placeholder
              }
              type="text"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              icon={<Phone className="h-6 w-6 text-neutral-700" />}
              required
            />

            <InputField
              id={stormyContent.modal.editCustomer.form.companyName.id}
              label={stormyContent.modal.editCustomer.form.companyName.label}
              placeholder={
                stormyContent.modal.editCustomer.form.companyName.placeholder
              }
              type="text"
              value={form.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              icon={<Landmark className="h-6 w-6 text-neutral-700" />}
            />

            <InputField
              id={stormyContent.modal.editCustomer.form.billingAddress.id}
              label={stormyContent.modal.editCustomer.form.billingAddress.label}
              placeholder={
                stormyContent.modal.editCustomer.form.billingAddress.placeholder
              }
              type="text"
              value={form.billingAddress}
              onChange={(e) => handleChange('billingAddress', e.target.value)}
              icon={<MapPin className="h-6 w-6 text-neutral-700" />}
              required
            />

            <InputField
              id={stormyContent.modal.editCustomer.form.zipCode.id}
              label={stormyContent.modal.editCustomer.form.zipCode.label}
              placeholder={
                stormyContent.modal.editCustomer.form.zipCode.placeholder
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
              value={timezone ?? ''}
              onChange={handleTimezoneChange}
              options={timeZoneOptions}
              icon={<Globe className="h-6 w-6 text-neutral-700" />}
            />

            <CompositeSelectField
              id={stormyContent.modal.editCustomer.form.planType.id}
              label={stormyContent.modal.editCustomer.form.planType.label}
              value={selectedPlan ?? ''}
              onChange={handlePlanChange}
              options={planOptions}
              icon={<DollarSign className="h-6 w-6 text-neutral-700" />}
              disabled
            />

            <CompositeSelectField
              id={stormyContent.modal.editCustomer.form.addAgents.id}
              label={stormyContent.modal.editCustomer.form.addAgents.label}
              value={selectedAgents}
              onChange={handleAgentsChange}
              options={salesAgentOptions}
              isMulti={true}
              icon={<UserRound className="h-6 w-6 text-neutral-700" />}
              fallbackLabel={
                stormyContent.modal.editCustomer.form.addAgents.fallbackLabel
              }
            />

            {selectedAgents.length > 0 && (
              <div className="flex flex-wrap gap-3 justify-start">
                {selectedAgents.map((agentId) => {
                  const agentName = agents?.salesAgents.find(
                    (a) => a._id === agentId
                  )?.name;

                  return (
                    <RemovableChip
                      key={agentId}
                      value={String(agentName)}
                      onClose={() =>
                        setSelectedAgents((prev) =>
                          prev.filter((id) => id !== agentId)
                        )
                      }
                      className="flex-shrink-0"
                    />
                  );
                })}
              </div>
            )}

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
                  !selectedPlan?.trim() ||
                  !timezone?.trim() ||
                  !status?.trim()
                }
              >
                {isPending ? (
                  <ButtonSpinner />
                ) : (
                  stormyContent.modal.editCustomer.form.submitButton.text
                )}
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
