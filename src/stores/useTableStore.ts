// Imports:
import { TableStore } from '@/types/Stores';
import { create } from 'zustand';

export const useTableStore = create<TableStore>((set) => ({
  selectedId: null,
  setId: (id) => set({ selectedId: id }),
  resetSelectedId: () => set({ selectedId: null }),
}));
