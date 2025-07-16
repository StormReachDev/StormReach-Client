// Imports:
import { StepperProps } from '@/types/UI/Stepper';
import { Stepper as BaseStepper, Step } from '@material-tailwind/react';

export default function Stepper({ steps, activeStep }: StepperProps) {
  return (
    <div className="w-full overflow-hidden">
      <BaseStepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step
            key={index}
            activeClassName="bg-red-200 border border-red-500"
            className="border border-red-500 bg-core-white"
            completedClassName="bg-stroke border border-stroke"
          >
            {step.icon}
          </Step>
        ))}
      </BaseStepper>
    </div>
  );
}
