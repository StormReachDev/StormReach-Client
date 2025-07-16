// Imports:
import { ReactNode } from 'react';

type StepItem = {
  icon: ReactNode;
};

export type StepperProps = {
  steps: StepItem[];
  initialStep?: number;
  activeStep?: number;
  setActiveStep?: (_step: number) => void;
};
