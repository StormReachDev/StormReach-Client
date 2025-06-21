// Imports:
import { CustomerFilters } from '@/types/Stores';
import { create } from 'zustand';

export const useFilterStore = create<CustomerFilters>((set) => ({
  keyword: '',
  plan: 'Plan Type',
  accountStatus: 'Account Status',
  assignedAgents: [],
  page: 1,
  limit: 10,
  setKeyword: (value) => set({ keyword: value }),
  setPlan: (value) => set({ plan: value }),
  setAccountStatus: (value) => set({ accountStatus: value }),
  setAssignedAgents: (values) => set({ assignedAgents: values }),
  setPage: (page: number) => set({ page }),
  setLimit: (limit: number) => set({ limit }),
}));
