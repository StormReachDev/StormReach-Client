// Imports:
import stormyContent from '@/constants/Content';
import { useRoleTypes } from '@/hooks/meta';
import { useAllRoofers } from '@/hooks/roofer';
import { useCreateTeamMember } from '@/hooks/team';
import { useModalStore } from '@/stores/useModalStore';
import { useSidebarStore } from '@/stores/useSidebarStore';
import {
  Alert,
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from '@material-tailwind/react';
import {
  CircleAlert,
  Globe,
  Mail,
  Phone,
  UserCog,
  UserRound,
} from 'lucide-react';
import { useState } from 'react';
import ButtonSpinner from '../../ButtonSpinner';
import CompositeSelectField from '../../CompositeSelect';
import FlowIndicator from '../../FlowIndicator';
import InputField from '../../InputField';

export default function AddTeamModal() {
  const { modal, closeModal } = useModalStore();
  const { activeItem } = useSidebarStore();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const [timezone, setTimezone] = useState<string>(
    stormyContent.modal.addCustomer.form.timeZone.defaultValue
  );
  const [selectedRole, setSelectedRole] = useState<string>(
    stormyContent.modal.addTeam.form.role.defaultValue
  );

  const timeZones = Intl.supportedValuesOf('timeZone');
  const { data: roofers } = useAllRoofers('');
  const { data: userRoles } = useRoleTypes();
  const { mutate, isPending } = useCreateTeamMember();

  if (modal !== 'AddTeam') return null;

  const customerOptions =
    (roofers?.roofers &&
      roofers.roofers.map((roofer) => ({
        label: roofer.userInfo?.name ?? '',
        value: roofer._id,
      }))) ??
    [];

  const roleOptions =
    (userRoles?.userRoles &&
      userRoles.userRoles.map((role) => ({
        label: role.label,
        value: role.value,
      }))) ??
    [];

  const timeZoneOptions = timeZones.map((zone) => ({
    label: zone,
    value: zone,
  }));

  function handleTimezoneChange(value: string | string[]) {
    if (typeof value === 'string') {
      setTimezone(value);
    }
  }

  function handleCustomerChange(value: string | string[]) {
    if (Array.isArray(value)) {
      setSelectedCustomers(value);
    }
  }

  function handleRoleChange(value: string | string[]) {
    if (typeof value === 'string') {
      setSelectedRole(value);
    }
  }

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const userData = {
      ...form,
      timeZone: timezone,
      role: selectedRole,
      assignedCustomers: selectedCustomers,
    };

    mutate(userData, {
      onSuccess: () => {
        closeModal();
        setForm({
          name: '',
          email: '',
          phone: '',
        });
        setSelectedCustomers([]);
        setTimezone(stormyContent.modal.addTeam.form.timeZone.defaultValue);
        setSelectedRole(stormyContent.modal.addTeam.form.role.defaultValue);
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
            {stormyContent.modal.addTeam.heading}
          </Typography>
          <FlowIndicator parent={activeItem} child="Add Team Member" />
        </DialogHeader>
        <DialogBody className="p-0">
          <form
            className="space-y-7 max-h-[60vh] overflow-y-auto scrollbar-hide"
            onSubmit={handleSubmit}
          >
            <InputField
              id={stormyContent.modal.addTeam.form.name.id}
              label={stormyContent.modal.addTeam.form.name.label}
              type="text"
              placeholder={stormyContent.modal.addTeam.form.name.placeholder}
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              icon={<UserRound className="h-6 w-6 text-neutral-700" />}
              required
            />

            <InputField
              id={stormyContent.modal.addTeam.form.email.id}
              label={stormyContent.modal.addTeam.form.email.label}
              placeholder={stormyContent.modal.addTeam.form.email.placeholder}
              type="text"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              icon={<Mail className="h-6 w-6 text-neutral-700" />}
              required
            />

            <CompositeSelectField
              id={stormyContent.modal.addTeam.form.timeZone.id}
              label={stormyContent.modal.addTeam.form.timeZone.label}
              value={timezone}
              onChange={handleTimezoneChange}
              options={timeZoneOptions}
              icon={<Globe className="h-6 w-6 text-neutral-700" />}
            />

            <InputField
              id={stormyContent.modal.addTeam.form.phone.id}
              label={stormyContent.modal.addTeam.form.phone.label}
              placeholder={stormyContent.modal.addTeam.form.phone.placeholder}
              type="text"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              icon={<Phone className="h-6 w-6 text-neutral-700" />}
              required
            />

            <CompositeSelectField
              id={stormyContent.modal.addTeam.form.role.id}
              label={stormyContent.modal.addTeam.form.role.label}
              value={selectedRole}
              onChange={handleRoleChange}
              options={roleOptions}
              icon={<UserCog className="h-6 w-6 text-neutral-700" />}
            />

            {selectedRole !== 'salesAgent' && (
              <CompositeSelectField
                id={stormyContent.modal.addTeam.form.addCustomers.id}
                label={stormyContent.modal.addTeam.form.addCustomers.label}
                value={selectedCustomers}
                onChange={handleCustomerChange}
                options={customerOptions}
                isMulti={true}
                icon={<UserRound className="h-6 w-6 text-neutral-700" />}
                fallbackLabel={
                  stormyContent.modal.addTeam.form.addCustomers.fallbackLabel
                }
              />
            )}

            {selectedRole === 'salesAgent' && (
              <Alert
                className="bg-stroke border border-stroke rounded-lg p-3"
                icon={<CircleAlert className="h-6 w-6 text-neutral-700" />}
              >
                <Typography
                  variant="small"
                  className="text-base font-medium text-neutral-800"
                >
                  {stormyContent.modal.addTeam.form.alert.text}{' '}
                </Typography>
              </Alert>
            )}

            <div className="max-w-full overflow-hidden ">
              <Button
                className="p-3 rounded-lg bg-primary text-xl font-semibold text-core-white w-full capitalize"
                type="submit"
                disabled={
                  !form.name ||
                  !form.email ||
                  !form.phone ||
                  !selectedRole ||
                  !timezone
                }
              >
                {isPending ? (
                  <ButtonSpinner />
                ) : (
                  stormyContent.modal.addTeam.form.submitButton.text
                )}
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
