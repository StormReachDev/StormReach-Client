// Imports:
import { Screen } from '@/types/SplitScreen';

export type DeviceState = {
  isMobile: boolean;
  setIsMobile: (_value: boolean) => void;
};

export type ScreenState = {
  currentScreen: Screen;
  setScreen: (_screen: Screen) => void;
};

export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type CountdownState = {
  timeLeft: TimeLeft;
  startCountdown: () => void;
  stopCountdown: () => void;
};
