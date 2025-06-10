// Imports:
import Wrapper from '@/components/Generics/Wrapper';
import ButtonSpinner from '@/components/UI/ButtonSpinner';
import BaseImage from '@/components/UI/Image';
import InputField from '@/components/UI/InputField';
import stormyContent from '@/constants/Content';
import { imagePaths } from '@/constants/Paths/Images';
import { useForgotPassword } from '@/hooks/auth';
import { FormStateProps } from '@/types/UI/Form';
import { Button, Typography } from '@material-tailwind/react';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPasswordForm({ setScreen }: FormStateProps) {
  const [email, setEmail] = useState('');
  const { mutate: sendResetEmail, isPending } = useForgotPassword();

  function toggleComponent() {
    setScreen('login');
    return;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    sendResetEmail(email);
    return;
  }

  return (
    <Wrapper className="size-full place-content-center space-y-8">
      <BaseImage
        src={imagePaths.logo.src}
        alt={imagePaths.logo.alt}
        className="object-cover max-w-xs mx-auto"
        priority
      />

      <div className="overflow-hidden space-y-2">
        <Typography
          variant="h1"
          className="font-semibold text-[32px] text-neutral-800"
        >
          {stormyContent.forgotPassword.heading}
        </Typography>

        <Typography
          variant="lead"
          className="font-medium text-2xl text-neutral-600"
        >
          {stormyContent.forgotPassword.subHeading}
        </Typography>
      </div>

      <form className="space-y-8 overflow-hidden" onSubmit={handleSubmit}>
        <div className="overflow-hidden">
          <InputField
            id={stormyContent.forgotPassword.form.email.id}
            label={stormyContent.forgotPassword.form.email.label}
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            icon={<Mail className="h-6 w-6 text-neutral-700" />}
            required
          />
        </div>

        <div className="overflow-hidden max-w-full">
          <Button
            className="p-3 rounded-lg bg-primary text-xl font-bold text-core-white w-full capitalize"
            type="submit"
            disabled={!email.trim() || isPending}
          >
            {isPending ? (
              <ButtonSpinner />
            ) : (
              stormyContent.forgotPassword.form.submitButton.text
            )}
          </Button>
        </div>

        <div className="overflow-hidden max-w-full flex justify-center items-center">
          <Typography
            variant="lead"
            className="font-medium text-2xl text-neutral-800"
          >
            {stormyContent.forgotPassword.form.backToLogin.text}
            <Link
              href={'#'}
              className="ml-2 text-primary hover:underline"
              onClick={toggleComponent}
            >
              {stormyContent.forgotPassword.form.backToLogin.linkText}
            </Link>
          </Typography>
        </div>
      </form>
    </Wrapper>
  );
}
