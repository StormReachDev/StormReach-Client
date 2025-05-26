// Imports:
import { Screen } from '@/types/SplitScreen';
import { create } from 'zustand';

interface ScreenState {
  currentScreen: Screen;
  setScreen: (screen: Screen) => void;
}

export const useScreenStore = create<ScreenState>((set) => ({
  currentScreen: 'login',
  setScreen: (screen) => set({ currentScreen: screen }),
}));
