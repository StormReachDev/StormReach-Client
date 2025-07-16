// Imports:
import { StepperState } from '@/types/Stores';
import { create } from 'zustand';

export const useStepperStore = create<StepperState>((set, get) => ({
  activeStep: 0,
  setActiveStep: (step) => set({ activeStep: step }),
  nextStep: () => set({ activeStep: get().activeStep + 1 }),
  prevStep: () => set({ activeStep: Math.max(get().activeStep - 1, 0) }),
  resetStepper: () => set({ activeStep: 0 }),
}));
