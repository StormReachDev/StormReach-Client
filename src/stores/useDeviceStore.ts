// Imports:
import { DeviceState } from '@/types/Stores';
import { create } from 'zustand';

export const useDeviceStore = create<DeviceState>((set) => ({
  isMobile: false,
  setIsMobile: (value) => set({ isMobile: value }),
}));
