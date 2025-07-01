// Imports:
import stormyContent from '@/constants/Content';
import { useAccountStatuses, useRoleTypes } from '@/hooks/meta';
import { useAllRoofers } from '@/hooks/roofer';
import { useMember, useUpdateMember } from '@/hooks/team';
import { useModalStore } from '@/stores/useModalStore';
import { useSidebarStore } from '@/stores/useSidebarStore';
import { useTableStore } from '@/stores/useTableStore';
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
  Tag,
  UserCog,
  UserRound,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import ButtonSpinner from '../../ButtonSpinner';
import CompositeSelectField from '../../CompositeSelect';
import FlowIndicator from '../../FlowIndicator';
import InputField from '../../InputField';

export default function EditTeamModal() {
  const { modal, closeModal } = useModalStore();
  const { activeItem } = useSidebarStore();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const { selectedId, setId } = useTableStore();
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const [timezone, setTimezone] = useState<string>();
  const [selectedRole, setSelectedRole] = useState<string>();
  const [status, setStatus] = useState<string>();

  const timeZones = Intl.supportedValuesOf('timeZone');
  const { data: roofers } = useAllRoofers('');
  const { data: userRoles } = useRoleTypes();
  const { mutate, isPending } = useUpdateMember();
  const { data: member } = useMember(String(selectedId));
  const { data: accountStatus } = useAccountStatuses();

  useEffect(() => {
    if (member?.member) {
      setForm({
        name: member.member.name,
        email: member.member.email,
        phone: member.member.phone,
      });

      setStatus(member.member.status);
      setTimezone(member.member.timeZone);
      setSelectedRole(member.member.role);
      setSelectedCustomers(
        member.member.assignedCustomers?.map((customer) =>
          typeof customer === 'string' ? customer : customer._id
        ) ?? []
      );
    }
  }, [member?.member]);

  const customerOptions = useMemo(() => {
    return (
      roofers?.roofers.map((roofer) => ({
        label: roofer.userInfo?.name ?? '',
        value: roofer._id,
      })) ?? []
    );
  }, [roofers?.roofers]);

  const roleOptions = useMemo(() => {
    return (
      userRoles?.userRoles.map((role) => ({
        label: role.label,
        value: role.value,
      })) ?? []
    );
  }, [userRoles?.userRoles]);

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

  if (modal !== 'EditTeam') return null;

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

  function handleStatusChange(value: string | string[]) {
    if (typeof value === 'string') {
      setStatus(value);
    }
  }

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData();

    formData.set('name', form.name);
    formData.set('email', form.email);
    formData.set('phone', form.phone);
    formData.set('timeZone', String(timezone));
    formData.set('status', String(status));
    formData.set('assignedCustomers', JSON.stringify(selectedCustomers));

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
            {stormyContent.modal.editTeam.heading}
          </Typography>
          <FlowIndicator parent={activeItem} child="Edit Team Member" />
        </DialogHeader>
        <DialogBody className="p-0">
          <form
            className="space-y-7 max-h-[60vh] overflow-y-auto scrollbar-hide"
            onSubmit={handleSubmit}
          >
            <InputField
              id={stormyContent.modal.editTeam.form.name.id}
              label={stormyContent.modal.editTeam.form.name.label}
              type="text"
              placeholder={stormyContent.modal.editTeam.form.name.placeholder}
              value={form.name}
              onChange={(e) => handleChange('name', e.target.value)}
              icon={<UserRound className="h-6 w-6 text-neutral-700" />}
              required
            />

            <CompositeSelectField
              id={stormyContent.modal.editTeam.form.selectStatus.id}
              label={stormyContent.modal.editTeam.form.selectStatus.label}
              value={status ?? ''}
              onChange={handleStatusChange}
              options={statusOptions}
              icon={<Tag className="h-6 w-6 text-neutral-700" />}
            />

            <InputField
              id={stormyContent.modal.editTeam.form.email.id}
              label={stormyContent.modal.editTeam.form.email.label}
              placeholder={stormyContent.modal.editTeam.form.email.placeholder}
              type="text"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              icon={<Mail className="h-6 w-6 text-neutral-700" />}
              required
            />

            <CompositeSelectField
              id={stormyContent.modal.editTeam.form.timeZone.id}
              label={stormyContent.modal.editTeam.form.timeZone.label}
              value={timezone ?? ''}
              onChange={handleTimezoneChange}
              options={timeZoneOptions}
              icon={<Globe className="h-6 w-6 text-neutral-700" />}
            />

            <InputField
              id={stormyContent.modal.editTeam.form.phone.id}
              label={stormyContent.modal.editTeam.form.phone.label}
              placeholder={stormyContent.modal.editTeam.form.phone.placeholder}
              type="text"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              icon={<Phone className="h-6 w-6 text-neutral-700" />}
              required
            />

            <CompositeSelectField
              id={stormyContent.modal.editTeam.form.role.id}
              label={stormyContent.modal.editTeam.form.role.label}
              value={selectedRole ?? ''}
              onChange={handleRoleChange}
              options={roleOptions}
              icon={<UserCog className="h-6 w-6 text-neutral-700" />}
              disabled
            />

            {selectedRole !== 'salesAgent' && (
              <CompositeSelectField
                id={stormyContent.modal.editTeam.form.addCustomers.id}
                label={stormyContent.modal.editTeam.form.addCustomers.label}
                value={selectedCustomers}
                onChange={handleCustomerChange}
                options={customerOptions}
                isMulti={true}
                icon={<UserRound className="h-6 w-6 text-neutral-700" />}
                fallbackLabel={
                  stormyContent.modal.editTeam.form.addCustomers.fallbackLabel
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
                  {stormyContent.modal.editTeam.form.alert.text}{' '}
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
                  !timezone ||
                  !status
                }
              >
                {isPending ? (
                  <ButtonSpinner />
                ) : (
                  stormyContent.modal.editTeam.form.submitButton.text
                )}
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
