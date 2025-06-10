// Imports:
import { Screen } from '@/types/UI/SplitScreen';

export type DeviceState = {
  isMobile: boolean;
  setIsMobile: (_value: boolean) => void;
};

export type ScreenState = {
  currentScreen: Screen;
  setScreen: (_screen: Screen) => void;
};

export type SidebarState = {
  activeItem: string;
  showNotifications: boolean;
  setActiveItem: (_label: string) => void;
  setShowNotifications: (_value: boolean) => void;
};
