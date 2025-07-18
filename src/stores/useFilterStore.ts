// Imports:
import { CustomerFilters } from '@/types/Stores';
import { create } from 'zustand';

export const useFilterStore = create<CustomerFilters>((set) => ({
  keyword: '',
  plan: 'Plan Type',
  accountStatus: 'Account Status',
  appointmentStatus: 'Appointment Status',
  disputeStatus: 'Dispute Status',
  transactionStatus: 'Transaction Status',
  transactionType: 'Transaction Type',
  assignedAgents: [],
  page: 1,
  limit: 10,

  setKeyword: (value: string) => set({ keyword: value }),
  setPlan: (value) => set({ plan: value }),
  setAccountStatus: (value) => set({ accountStatus: value }),
  setAppointmentStatus: (value) => set({ appointmentStatus: value }),
  setAssignedAgents: (values) => set({ assignedAgents: values }),
  setPage: (page: number) => set({ page }),
  setLimit: (limit: number) => set({ limit }),
  setTransactionStatus: (value) => set({ transactionStatus: value }),
  setDisputeStatus: (value) => set({ disputeStatus: value }),
  setTransactionType: (value) => set({ transactionType: value }),
  resetToDefaults: () =>
    set({
      keyword: '',
      plan: 'Plan Type',
      accountStatus: 'Account Status',
      appointmentStatus: 'Appointment Status',
      transactionStatus: 'Transaction Status',
      transactionType: 'Transaction Type',
      assignedAgents: [],
      page: 1,
      limit: 10,
    }),
}));
