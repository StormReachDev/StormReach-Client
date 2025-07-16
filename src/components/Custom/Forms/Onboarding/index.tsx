// Imports:
import ButtonSpinner from '@/components/UI/ButtonSpinner';
import InputField from '@/components/UI/InputField';
import { config } from '@/config/EnvironmentVariables';
import stormyContent from '@/constants/Content';
import { useMe } from '@/hooks/auth';
import { useUpdateRoofer } from '@/hooks/roofer';
import { useUploadStore } from '@/stores/useUploadStore';
import { Button } from '@material-tailwind/react';
import { Landmark, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import UploadWidget from '../../UploadWidget';

export function CustomerForm({ nextStep }: { nextStep: () => void }) {
  const [form, setForm] = useState({
    companyName: '',
    businessAddress: '',
    contactName: '',
    contactPhone: '',
    zipCode: '',
  });
  const { data } = useMe();
  const { mutate, isPending } = useUpdateRoofer();
  const { imageUrl, publicId, setImageUrl, setPublicId } = useUploadStore();

  useEffect(() => {
    if (data?.customer) {
      setForm({
        companyName: data.customer.companyName,
        businessAddress: data.customer.businessAddress || '',
        contactName: data.customer.contactName || '',
        contactPhone: data.customer.contactPhone || '',
        zipCode: data.customer.zipCode || '',
      });
    }

    if (
      data?.customer?.companyLogo?.public_id &&
      data?.customer?.companyLogo?.url
    ) {
      setImageUrl(data?.customer?.companyLogo?.url);
      setPublicId(data?.customer?.companyLogo?.public_id);
    }
  }, [data?.customer]);

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData();
    formData.set('companyName', form.companyName);
    formData.set('businessAddress', form.businessAddress);
    formData.set('contactName', form.contactName);
    formData.set('contactPhone', form.contactPhone);
    formData.set('zipCode', form.zipCode);

    if (imageUrl && publicId) {
      formData.set(
        'companyLogo',
        JSON.stringify({ public_id: publicId, url: imageUrl })
      );
    }

    mutate(
      {
        id: String(data?.customer?._id),
        data: formData,
      },

      {
        onSuccess: () => {
          nextStep();
        },
      }
    );
  }

  return (
    <div className="w-full space-y-10">
      <form className="space-y-7 overflow-hidden" onSubmit={handleSubmit}>
        <InputField
          id={stormyContent.cutomer.onboarding.form.companyName.id}
          label={stormyContent.cutomer.onboarding.form.companyName.label}
          type="text"
          value={form.companyName}
          onChange={(e) => handleChange('companyName', e.target.value)}
          icon={<Landmark className="h-6 w-6 text-neutral-700" />}
          required
          placeholder={
            stormyContent.cutomer.onboarding.form.companyName.placeholder
          }
          bgColor="bg-background"
        />

        <InputField
          id={stormyContent.cutomer.onboarding.form.businessAddress.id}
          label={stormyContent.cutomer.onboarding.form.businessAddress.label}
          type="text"
          value={form.businessAddress}
          onChange={(e) => handleChange('businessAddress', e.target.value)}
          icon={<MapPin className="h-6 w-6 text-neutral-700" />}
          required
          placeholder={
            stormyContent.cutomer.onboarding.form.businessAddress.placeholder
          }
          bgColor="bg-background"
        />

        <UploadWidget
          cloudName={config.CLOUDINARY_NAME}
          id={stormyContent.cutomer.onboarding.form.uploadLogo.id}
          label={stormyContent.cutomer.onboarding.form.uploadLogo.label}
          uploadPreset={config.CLOUDINARY_UPLOAD_PRESET}
          onUpload={(data) => {
            setForm((prev) => ({
              ...prev,
              companyLogo: {
                public_id: data.public_id,
                url: data.secure_url,
              },
            }));
          }}
        />

        <InputField
          id={stormyContent.cutomer.onboarding.form.contactName.id}
          label={stormyContent.cutomer.onboarding.form.contactName.label}
          type="text"
          value={form.contactName}
          onChange={(e) => handleChange('contactName', e.target.value)}
          icon={<MapPin className="h-6 w-6 text-neutral-700" />}
          required
          placeholder={
            stormyContent.cutomer.onboarding.form.contactName.placeholder
          }
          bgColor="bg-background"
        />

        <InputField
          id={stormyContent.cutomer.onboarding.form.contactPhone.id}
          label={stormyContent.cutomer.onboarding.form.contactPhone.label}
          type="text"
          value={form.contactPhone}
          onChange={(e) => handleChange('contactPhone', e.target.value)}
          icon={<MapPin className="h-6 w-6 text-neutral-700" />}
          required
          placeholder={
            stormyContent.cutomer.onboarding.form.contactPhone.placeholder
          }
          bgColor="bg-background"
        />

        <InputField
          id={stormyContent.cutomer.onboarding.form.zipCode.id}
          label={stormyContent.cutomer.onboarding.form.zipCode.label}
          type="text"
          value={form.zipCode}
          onChange={(e) => handleChange('zipCode', e.target.value)}
          icon={<MapPin className="h-6 w-6 text-neutral-700" />}
          required
          placeholder={
            stormyContent.cutomer.onboarding.form.zipCode.placeholder
          }
          bgColor="bg-background"
        />

        <div className="overflow-hidden max-w-full">
          <Button
            className="p-3 rounded-xl bg-primary text-xl font-bold text-core-white w-full capitalize"
            type="submit"
            disabled={
              !form.companyName.trim() ||
              !form.businessAddress.trim() ||
              !form.contactName.trim() ||
              !form.contactPhone.trim() ||
              !form.zipCode.trim() ||
              !imageUrl.trim() ||
              isPending
            }
          >
            {isPending ? (
              <ButtonSpinner />
            ) : (
              stormyContent.cutomer.onboarding.form.nextButton.text
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
