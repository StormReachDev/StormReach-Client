// Imports:
import { ScreenState } from '@/types/Stores';
import { create } from 'zustand';

export const useScreenStore = create<ScreenState>((set) => ({
  currentScreen: 'login',
  setScreen: (screen) => set({ currentScreen: screen }),
}));
