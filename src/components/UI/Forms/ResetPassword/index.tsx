// Imports:
import BaseImage from '@/components/Generics/Image';
import InputField from '@/components/Generics/InputField';
import Wrapper from '@/components/Generics/Wrapper';
import stormyContent from '@/constants/Content';
import { imagePaths } from '@/constants/Paths/Images';
import { Button, Typography } from '@material-tailwind/react';
import { Lock } from 'lucide-react';
import { useState } from 'react';

export default function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <Wrapper className="size-full place-content-center space-y-8">
      <BaseImage
        src={imagePaths.logo.src}
        alt={imagePaths.logo.alt}
        className="object-cover max-w-xs mx-auto"
        priority
      />

      <div className="overflow-hidden">
        <Typography
          variant="h1"
          className="font-semibold text-[32px] text-neutral-800"
        >
          {stormyContent.resetPassword.heading}
        </Typography>

        <Typography
          variant="lead"
          className="font-medium text-2xl text-neutral-600"
        >
          {stormyContent.resetPassword.subheading}
        </Typography>
      </div>

      <form className="space-y-8 overflow-hidden">
        <div className="overflow-hidden space-y-7">
          <InputField
            id="newPassword"
            label={stormyContent.resetPassword.form.newPassword.label}
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            icon={<Lock className="h-6 w-6 text-neutral-700" />}
          />

          <InputField
            id="confirmPassword"
            label={stormyContent.resetPassword.form.confirmPassword.label}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            icon={<Lock className="h-6 w-6 text-neutral-700" />}
          />
        </div>

        <div className="overflow-hidden max-w-full">
          <Button
            className="p-3 rounded-lg bg-primary text-xl font-bold text-core-white w-full capitalize"
            variant="outlined"
          >
            {stormyContent.resetPassword.form.submitButton.text}
          </Button>
        </div>
      </form>
    </Wrapper>
  );
}
