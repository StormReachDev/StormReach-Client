// Imports:
import ButtonSpinner from '@/components/Generics/ButtonSpinner';
import BaseImage from '@/components/Generics/Image';
import InputField from '@/components/Generics/InputField';
import Wrapper from '@/components/Generics/Wrapper';
import stormyContent from '@/constants/Content';
import { imagePaths } from '@/constants/Paths/Images';
import { useResetPassword } from '@/hooks/auth';
import { Button, Typography } from '@material-tailwind/react';
import { Lock } from 'lucide-react';
import { useState } from 'react';

export default function ResetPasswordForm({ token }: { token: string }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { mutate: resetPassword, isPending } = useResetPassword();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    resetPassword({ token, password, confirmPassword });
  }

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

      <form className="space-y-8 overflow-hidden" onSubmit={handleSubmit}>
        <div className="overflow-hidden space-y-7">
          <InputField
            id="password"
            label={stormyContent.resetPassword.form.newPassword.label}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock className="h-6 w-6 text-neutral-700" />}
            required
          />

          <InputField
            id="confirmPassword"
            label={stormyContent.resetPassword.form.confirmPassword.label}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            icon={<Lock className="h-6 w-6 text-neutral-700" />}
            required
          />
        </div>

        <div className="overflow-hidden max-w-full">
          <Button
            className="p-3 rounded-lg bg-primary text-xl font-bold text-core-white w-full capitalize"
            type="submit"
            disabled={!password.trim() || !confirmPassword.trim()}
          >
            {isPending ? (
              <ButtonSpinner />
            ) : (
              stormyContent.resetPassword.form.submitButton.text
            )}
          </Button>
        </div>
      </form>
    </Wrapper>
  );
}
