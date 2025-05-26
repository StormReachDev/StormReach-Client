'use client';

// Imports:
import BaseImage from '@/components/Generics/Image';
import InputField from '@/components/Generics/InputField';
import Wrapper from '@/components/Generics/Wrapper';
import stormyContent from '@/constants/Content';
import { imagePaths } from '@/constants/Paths/Images';
import { Button, Typography } from '@material-tailwind/react';
import { Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Wrapper className="size-full py-8 space-y-8">
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
          {stormyContent.login.heading}
        </Typography>

        <Typography
          variant="lead"
          className="font-medium text-2xl text-neutral-600"
        >
          {stormyContent.login.subheading}
        </Typography>
      </div>

      <form className="space-y-8 overflow-hidden">
        <div className="overflow-hidden space-y-7">
          <InputField
            id="email"
            label={stormyContent.login.form.email.label}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail className="h-6 w-6 text-neutral-700" />}
          />

          <InputField
            id="password"
            label={stormyContent.login.form.password.label}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock className="h-6 w-6 text-neutral-700" />}
          />
        </div>

        <div className="overflow-hidden max-w-full">
          <Button
            className="py-4 px-2 rounded-lg bg-primary text-xl font-bold text-core-white w-full capitalize"
            variant="outlined"
          >
            {stormyContent.login.form.submitButton.text}
          </Button>
        </div>

        <div className="overflow-hidden max-w-full flex justify-center items-center">
          <Typography
            variant="lead"
            className="font-medium text-2xl text-neutral-800"
          >
            {stormyContent.login.form.forgotPassword.text}
            <Link href={'#'} className="ml-2 text-primary hover:underline">
              {stormyContent.login.form.forgotPassword.linkText}
            </Link>
          </Typography>
        </div>
      </form>
    </Wrapper>
  );
}
