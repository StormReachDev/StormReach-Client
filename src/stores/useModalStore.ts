// Imports:
import { create } from 'zustand';

type ModalType = 'Logout' | 'Customer' | null;

type ModalStore = {
  modal: ModalType;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  modal: null,
  openModal: (_type) => set({ modal: _type }),
  closeModal: () => set({ modal: null }),
}));
