// Imports:
import stormyContent from '@/constants/Content';
import { AppointmentStatusKeys } from '@/constants/Keys';
import { useAppointment, useUpdateAppointment } from '@/hooks/appointment';
import { useActiveLeaks, useAppointmentStatuses } from '@/hooks/meta';
import { useAllRoofers } from '@/hooks/roofer';
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
  CalendarDays,
  Clock,
  DollarSign,
  Globe,
  House,
  Landmark,
  MapPin,
  Phone,
  Tag,
  UserRound,
  Warehouse,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import ButtonSpinner from '../../ButtonSpinner';
import CompositeSelectField from '../../CompositeSelect';
import FlowIndicator from '../../FlowIndicator';
import InputField from '../../InputField';

export default function EditAppointmentModal() {
  const { modal, closeModal } = useModalStore();
  const { activeItem } = useSidebarStore();
  const [form, setForm] = useState({
    homeOwnerName: '',
    homePhoneNumber: '',
    homeOwnerAddress: '',
    roofAge: '',
    insuranceProvider: '',
  });

  const { selectedId, setId } = useTableStore();
  const [selectedCustomer, setSelectedCustomer] = useState<string>();
  const [timezone, setTimezone] = useState<string>(
    stormyContent.modal.addCustomer.form.timeZone.defaultValue
  );
  const [selectedAppointmentDate, setSelectedAppointmentDate] =
    useState<string>('');
  const [selectedAppointmentTime, setSelectedAppointmentTime] =
    useState<string>('');
  const [selectedActiveLeaks, setSelectedActiveLeaks] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');

  const { data: appointment } = useAppointment(String(selectedId));
  const { data: roofers } = useAllRoofers();
  const { data: activeLeaks } = useActiveLeaks();
  const { data: status } = useAppointmentStatuses();
  const timeZones = Intl.supportedValuesOf('timeZone');

  const { mutate, isPending } = useUpdateAppointment();

  useEffect(() => {
    if (appointment?.appointment) {
      setForm({
        homeOwnerName: appointment.appointment.homeOwnerName,
        homePhoneNumber: appointment.appointment.homePhoneNumber,
        homeOwnerAddress: appointment.appointment.homeOwnerAddress,
        roofAge: appointment.appointment.roofAge,
        insuranceProvider: appointment.appointment.insuranceProvider || '',
      });

      setSelectedCustomer(appointment.appointment.customer);
      setSelectedStatus(appointment.appointment.appointmentStatus);
      setTimezone(appointment.appointment.timeZone);
      setSelectedAppointmentDate(
        new Date(appointment.appointment.appointmentDate).toLocaleDateString()
      );
      setSelectedAppointmentTime(appointment.appointment.appointmentTime);
      setSelectedActiveLeaks(appointment.appointment.activeLeaks);
    }
  }, [appointment?.appointment]);

  const customerOptions = useMemo(
    () =>
      roofers?.roofers?.map((roofer) => ({
        label: roofer.userInfo?.name ?? '',
        value: roofer._id,
      })) ?? [],
    [roofers?.roofers]
  );

  const activeLeaksOptions = useMemo(
    () =>
      activeLeaks?.activeLeaks?.map((leak) => ({
        label: leak.label,
        value: leak.value,
      })) ?? [],
    [activeLeaks?.activeLeaks]
  );

  const appointmentStatusOptions = useMemo(
    () =>
      status?.appointmentStatuses
        .filter(
          (status) =>
            status.label !== 'Pending' &&
            status.label !== 'Denied' &&
            status.label !== 'Disputed'
        )
        .map((status) => ({
          label: status.label,
          value: status.value,
        })) ?? [],
    [status?.appointmentStatuses]
  );

  // TODO: Replace this with customer's date and time.
  const appointmentTimeOptions = [
    {
      label: '2:00 PM',
      value: '2:00 PM',
    },

    {
      label: '3:00 PM',
      value: '3:00 PM',
    },

    {
      label: '4:00 PM',
      value: '4:00 PM',
    },
  ];

  const appointmentDateOptions = [
    {
      label:
        stormyContent.modal.addAppointment.form.appointmentDate.defaultValue,
      value:
        stormyContent.modal.addAppointment.form.appointmentDate.defaultValue,
    },
  ];

  const timeZoneOptions = timeZones.map((zone) => ({
    label: zone,
    value: zone,
  }));

  if (modal !== 'EditAppointment') return null;

  function handleCustomerChange(value: string | string[]) {
    if (typeof value === 'string') {
      setSelectedCustomer(value);
      const selectedRoofer = roofers?.roofers?.find(
        (roofer) => roofer._id === value
      );

      if (selectedRoofer?.userInfo?.timeZone) {
        setTimezone(selectedRoofer?.userInfo?.timeZone);
      }
    }
  }

  function handleTimezoneChange(value: string | string[]) {
    if (typeof value === 'string') {
      setTimezone(value);
    }
  }

  function handleAppointmentDateChange(value: string | string[]) {
    if (typeof value === 'string') {
      setSelectedAppointmentDate(value);
    }
  }

  function handleAppointmentTimeChange(value: string | string[]) {
    if (typeof value === 'string') {
      setSelectedAppointmentTime(value);
    }
  }

  function handleActiveLeaksChange(value: string | string[]) {
    if (typeof value === 'string') {
      setSelectedActiveLeaks(value);
    }
  }

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleStatusChange(value: string | string[]) {
    if (typeof value === 'string') {
      setSelectedStatus(value);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData();

    formData.set('homeOwnerName', form.homeOwnerName);
    formData.set('homePhoneNumber', form.homePhoneNumber);
    formData.set('homeOwnerAddress', form.homeOwnerAddress);
    formData.set('roofAge', form.roofAge);
    formData.set('insuranceProvider', form.insuranceProvider);
    formData.set('timeZone', timezone);
    formData.set('appointmentDate', selectedAppointmentDate);
    formData.set('appointmentTime', selectedAppointmentTime);
    formData.set('activeLeaks', selectedActiveLeaks);
    formData.set('appointmentStatus', selectedStatus);

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
            {stormyContent.modal.editAppointment.heading}
          </Typography>
          <FlowIndicator parent={activeItem} child="Add Appointment" />
        </DialogHeader>
        <DialogBody className="p-0">
          <form
            className="space-y-7 max-h-[60vh] overflow-y-auto scrollbar-hide"
            onSubmit={handleSubmit}
          >
            <CompositeSelectField
              id={stormyContent.modal.editAppointment.form.name.id}
              label={stormyContent.modal.editAppointment.form.name.label}
              value={selectedCustomer ?? ''}
              onChange={handleCustomerChange}
              options={customerOptions}
              icon={<DollarSign className="h-6 w-6 text-neutral-700" />}
              fallbackLabel={
                stormyContent.modal.editAppointment.form.name.placeholder
              }
              disabled
            />

            <CompositeSelectField
              id={stormyContent.modal.editAppointment.form.appointmentStatus.id}
              label={
                stormyContent.modal.editAppointment.form.appointmentStatus.label
              }
              value={selectedStatus}
              onChange={handleStatusChange}
              options={appointmentStatusOptions}
              icon={<Tag className="h-6 w-6 text-neutral-700" />}
              disabled={selectedStatus === 'disputed'}
              fallbackLabel={
                AppointmentStatusKeys[
                  selectedStatus as keyof typeof AppointmentStatusKeys
                ]
              }
            />

            <CompositeSelectField
              id={stormyContent.modal.editAppointment.form.timeZone.id}
              label={stormyContent.modal.editAppointment.form.timeZone.label}
              value={timezone}
              onChange={handleTimezoneChange}
              options={timeZoneOptions}
              icon={<Globe className="h-6 w-6 text-neutral-700" />}
            />

            <InputField
              id={stormyContent.modal.editAppointment.form.homeOwnerName.id}
              label={
                stormyContent.modal.editAppointment.form.homeOwnerName.label
              }
              type="text"
              placeholder={
                stormyContent.modal.editAppointment.form.homeOwnerName
                  .placeholder
              }
              value={form.homeOwnerName}
              onChange={(e) => handleChange('homeOwnerName', e.target.value)}
              icon={<UserRound className="h-6 w-6 text-neutral-700" />}
              required
            />

            <InputField
              id={stormyContent.modal.editAppointment.form.homeOwnerPhone.id}
              label={
                stormyContent.modal.editAppointment.form.homeOwnerPhone.label
              }
              placeholder={
                stormyContent.modal.editAppointment.form.homeOwnerPhone
                  .placeholder
              }
              type="text"
              value={form.homePhoneNumber}
              onChange={(e) => handleChange('homePhoneNumber', e.target.value)}
              icon={<Phone className="h-6 w-6 text-neutral-700" />}
              required
            />

            <InputField
              id={stormyContent.modal.editAppointment.form.homeOwnerAddress.id}
              label={
                stormyContent.modal.editAppointment.form.homeOwnerAddress.label
              }
              placeholder={
                stormyContent.modal.editAppointment.form.homeOwnerAddress
                  .placeholder
              }
              type="text"
              value={form.homeOwnerAddress}
              onChange={(e) => handleChange('homeOwnerAddress', e.target.value)}
              icon={<MapPin className="h-6 w-6 text-neutral-700" />}
              required
            />

            <CompositeSelectField
              id={stormyContent.modal.editAppointment.form.appointmentDate.id}
              label={
                stormyContent.modal.editAppointment.form.appointmentDate.label
              }
              value={selectedAppointmentDate}
              onChange={handleAppointmentDateChange}
              options={appointmentDateOptions}
              icon={<CalendarDays className="h-6 w-6 text-neutral-700" />}
              fallbackLabel={
                stormyContent.modal.editAppointment.form.appointmentDate
                  .placeholder
              }
            />

            <CompositeSelectField
              id={stormyContent.modal.editAppointment.form.appointmentTime.id}
              label={
                stormyContent.modal.editAppointment.form.appointmentTime.label
              }
              value={selectedAppointmentTime}
              onChange={handleAppointmentTimeChange}
              options={appointmentTimeOptions}
              icon={<Clock className="h-6 w-6 text-neutral-700" />}
              fallbackLabel={
                stormyContent.modal.editAppointment.form.appointmentTime
                  .placeholder
              }
            />

            <CompositeSelectField
              id={stormyContent.modal.editAppointment.form.activeLeaks.id}
              label={stormyContent.modal.editAppointment.form.activeLeaks.label}
              value={selectedActiveLeaks}
              onChange={handleActiveLeaksChange}
              options={activeLeaksOptions}
              icon={<Warehouse className="h-6 w-6 text-neutral-700" />}
              fallbackLabel={
                stormyContent.modal.editAppointment.form.activeLeaks.placeholder
              }
            />

            <InputField
              id={stormyContent.modal.editAppointment.form.roofAge.id}
              label={stormyContent.modal.editAppointment.form.roofAge.label}
              type="text"
              placeholder={
                stormyContent.modal.editAppointment.form.roofAge.placeholder
              }
              value={form.roofAge}
              onChange={(e) => handleChange('roofAge', e.target.value)}
              icon={<House className="h-6 w-6 text-neutral-700" />}
              required
            />

            <InputField
              id={stormyContent.modal.editAppointment.form.insuranceProvider.id}
              label={
                stormyContent.modal.editAppointment.form.insuranceProvider.label
              }
              type="text"
              placeholder={
                stormyContent.modal.editAppointment.form.insuranceProvider
                  .placeholder
              }
              value={form.insuranceProvider}
              onChange={(e) =>
                handleChange('insuranceProvider', e.target.value)
              }
              icon={<Landmark className="h-6 w-6 text-neutral-700" />}
            />

            <div className="max-w-full overflow-hidden ">
              <Button
                className="p-3 rounded-lg bg-primary text-xl font-semibold text-core-white w-full capitalize"
                type="submit"
                disabled={
                  !form.homeOwnerName ||
                  !form.homePhoneNumber ||
                  !form.homeOwnerAddress ||
                  !form.roofAge ||
                  !selectedCustomer ||
                  !selectedAppointmentDate ||
                  !selectedAppointmentTime ||
                  !selectedActiveLeaks ||
                  !timezone ||
                  !selectedStatus ||
                  isPending
                }
              >
                {isPending ? (
                  <ButtonSpinner />
                ) : (
                  stormyContent.modal.editAppointment.form.submitButton.text
                )}
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
