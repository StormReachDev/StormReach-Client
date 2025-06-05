// Imports:
import { SidebarState } from '@/types/Stores';
import { create } from 'zustand';

export const useSidebarStore = create<SidebarState>((set) => ({
  activeItem: 'Dashboard',
  setActiveItem: (label) => set({ activeItem: label }),
  showNotifications: false,
  setShowNotifications: (value) => set({ showNotifications: value }),
}));
