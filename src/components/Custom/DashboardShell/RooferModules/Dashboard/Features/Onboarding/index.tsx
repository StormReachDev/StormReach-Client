// Imports:
import { CustomerForm } from '@/components/Custom/Forms/Onboarding';
import ServiceAreaForm from '@/components/Custom/Forms/ServiceArea';
import Stepper from '@/components/UI/Stepper';
import Wrapper from '@/components/UI/Wrapper';
import { useStepperStore } from '@/stores/useStepperStore';
import { Map, UserIcon } from 'lucide-react';

export default function Onboarding() {
  const { activeStep, nextStep } = useStepperStore();

  const steps = [
    {
      icon: <UserIcon className="size-6 text-red-500" />,
    },
    {
      icon: <Map className="size-6 text-red-500" />,
    },
  ];

  return (
    <Wrapper className="max-w-full w-full py-8 px-[30px] rounded-[20px] border border-stroke bg-input space-y-8">
      <Stepper steps={steps} key={'onboarding-form'} activeStep={activeStep} />
      {activeStep === 0 && <CustomerForm nextStep={nextStep} />}
      {activeStep === 1 && <ServiceAreaForm />}
    </Wrapper>
  );
}
