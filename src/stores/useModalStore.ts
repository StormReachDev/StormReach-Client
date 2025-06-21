// Imports:
import { ModalStore } from '@/types/Stores';
import { create } from 'zustand';

export const useModalStore = create<ModalStore>((set) => ({
  modal: null,
  openModal: (_type) => set({ modal: _type }),
  closeModal: () => set({ modal: null }),
}));
