// Imports:
import stormyContent from '@/constants/Content';
import { useCreateAppointment } from '@/hooks/appointment';
import { useActiveLeaks } from '@/hooks/meta';
import { useAllRoofers } from '@/hooks/roofer';
import { useModalStore } from '@/stores/useModalStore';
import { useSidebarStore } from '@/stores/useSidebarStore';
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
  UserRound,
  Warehouse,
} from 'lucide-react';
import { useState } from 'react';
import ButtonSpinner from '../../ButtonSpinner';
import CompositeSelectField from '../../CompositeSelect';
import FlowIndicator from '../../FlowIndicator';
import InputField from '../../InputField';

export default function AddAppointmentModal() {
  const { modal, closeModal } = useModalStore();
  const { activeItem } = useSidebarStore();
  const [form, setForm] = useState({
    homeOwnerName: '',
    homePhoneNumber: '',
    homeOwnerAddress: '',
    roofAge: '',
    insuranceProvider: '',
  });

  const [selectedCustomer, setSelectedCustomer] = useState<string>();
  const [timezone, setTimezone] = useState<string>(
    stormyContent.modal.addCustomer.form.timeZone.defaultValue
  );
  const [selectedAppointmentDate, setSelectedAppointmentDate] =
    useState<string>('');
  const [selectedAppointmentTime, setSelectedAppointmentTime] =
    useState<string>('');
  const [selectedActiveLeaks, setSelectedActiveLeaks] = useState<string>('');

  const { data: roofers } = useAllRoofers();
  const { data: activeLeaks } = useActiveLeaks();
  const { mutate, isPending } = useCreateAppointment();
  const timeZones = Intl.supportedValuesOf('timeZone');

  if (modal !== 'AddAppointment') return null;

  const customerOptions =
    roofers?.roofers?.map((roofer) => ({
      label: roofer.userInfo?.name ?? '',
      value: roofer._id,
    })) ?? [];

  const activeLeaksOptions =
    activeLeaks?.activeLeaks?.map((leak) => ({
      label: leak.label,
      value: leak.value,
    })) ?? [];

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const appointmentData = {
      ...form,
      customer: String(selectedCustomer),
      timeZone: timezone,
      appointmentDate: selectedAppointmentDate,
      appointmentTime: selectedAppointmentTime,
      activeLeaks: selectedActiveLeaks as 'yes' | 'no',
    };

    mutate(appointmentData, {
      onSuccess: () => {
        closeModal();
        setForm({
          homeOwnerName: '',
          homePhoneNumber: '',
          homeOwnerAddress: '',
          roofAge: '',
          insuranceProvider: '',
        });
        setSelectedCustomer('');
        setTimezone(stormyContent.modal.addCustomer.form.timeZone.defaultValue);
        setSelectedAppointmentDate('');
        setSelectedAppointmentTime('');
        setSelectedActiveLeaks('');
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
            {stormyContent.modal.addAppointment.heading}
          </Typography>
          <FlowIndicator parent={activeItem} child="Add Appointment" />
        </DialogHeader>
        <DialogBody className="p-0">
          <form
            className="space-y-7 max-h-[60vh] overflow-y-auto scrollbar-hide"
            onSubmit={handleSubmit}
          >
            <CompositeSelectField
              id={stormyContent.modal.addAppointment.form.name.id}
              label={stormyContent.modal.addAppointment.form.name.label}
              value={selectedCustomer ?? ''}
              onChange={handleCustomerChange}
              options={customerOptions}
              icon={<DollarSign className="h-6 w-6 text-neutral-700" />}
              fallbackLabel={
                stormyContent.modal.addAppointment.form.name.placeholder
              }
            />

            <CompositeSelectField
              id={stormyContent.modal.addAppointment.form.timeZone.id}
              label={stormyContent.modal.addAppointment.form.timeZone.label}
              value={timezone}
              onChange={handleTimezoneChange}
              options={timeZoneOptions}
              icon={<Globe className="h-6 w-6 text-neutral-700" />}
            />

            <InputField
              id={stormyContent.modal.addAppointment.form.homeOwnerName.id}
              label={
                stormyContent.modal.addAppointment.form.homeOwnerName.label
              }
              type="text"
              placeholder={
                stormyContent.modal.addAppointment.form.homeOwnerName
                  .placeholder
              }
              value={form.homeOwnerName}
              onChange={(e) => handleChange('homeOwnerName', e.target.value)}
              icon={<UserRound className="h-6 w-6 text-neutral-700" />}
              required
            />

            <InputField
              id={stormyContent.modal.addAppointment.form.homeOwnerPhone.id}
              label={
                stormyContent.modal.addAppointment.form.homeOwnerPhone.label
              }
              placeholder={
                stormyContent.modal.addAppointment.form.homeOwnerPhone
                  .placeholder
              }
              type="text"
              value={form.homePhoneNumber}
              onChange={(e) => handleChange('homePhoneNumber', e.target.value)}
              icon={<Phone className="h-6 w-6 text-neutral-700" />}
              required
            />

            <InputField
              id={stormyContent.modal.addAppointment.form.homeOwnerAddress.id}
              label={
                stormyContent.modal.addAppointment.form.homeOwnerAddress.label
              }
              placeholder={
                stormyContent.modal.addAppointment.form.homeOwnerAddress
                  .placeholder
              }
              type="text"
              value={form.homeOwnerAddress}
              onChange={(e) => handleChange('homeOwnerAddress', e.target.value)}
              icon={<MapPin className="h-6 w-6 text-neutral-700" />}
              required
            />

            <CompositeSelectField
              id={stormyContent.modal.addAppointment.form.appointmentDate.id}
              label={
                stormyContent.modal.addAppointment.form.appointmentDate.label
              }
              value={selectedAppointmentDate}
              onChange={handleAppointmentDateChange}
              options={appointmentDateOptions}
              icon={<CalendarDays className="h-6 w-6 text-neutral-700" />}
              fallbackLabel={
                stormyContent.modal.addAppointment.form.appointmentDate
                  .placeholder
              }
            />

            <CompositeSelectField
              id={stormyContent.modal.addAppointment.form.appointmentTime.id}
              label={
                stormyContent.modal.addAppointment.form.appointmentTime.label
              }
              value={selectedAppointmentTime}
              onChange={handleAppointmentTimeChange}
              options={appointmentTimeOptions}
              icon={<Clock className="h-6 w-6 text-neutral-700" />}
              fallbackLabel={
                stormyContent.modal.addAppointment.form.appointmentTime
                  .placeholder
              }
            />

            <CompositeSelectField
              id={stormyContent.modal.addAppointment.form.activeLeaks.id}
              label={stormyContent.modal.addAppointment.form.activeLeaks.label}
              value={selectedActiveLeaks}
              onChange={handleActiveLeaksChange}
              options={activeLeaksOptions}
              icon={<Warehouse className="h-6 w-6 text-neutral-700" />}
              fallbackLabel={
                stormyContent.modal.addAppointment.form.activeLeaks.placeholder
              }
            />

            <InputField
              id={stormyContent.modal.addAppointment.form.roofAge.id}
              label={stormyContent.modal.addAppointment.form.roofAge.label}
              type="text"
              placeholder={
                stormyContent.modal.addAppointment.form.roofAge.placeholder
              }
              value={form.roofAge}
              onChange={(e) => handleChange('roofAge', e.target.value)}
              icon={<House className="h-6 w-6 text-neutral-700" />}
              required
            />

            <InputField
              id={stormyContent.modal.addAppointment.form.insuranceProvider.id}
              label={
                stormyContent.modal.addAppointment.form.insuranceProvider.label
              }
              type="text"
              placeholder={
                stormyContent.modal.addAppointment.form.insuranceProvider
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
                  !timezone
                }
              >
                {isPending ? (
                  <ButtonSpinner />
                ) : (
                  stormyContent.modal.addAppointment.form.submitButton.text
                )}
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </>
  );
}
