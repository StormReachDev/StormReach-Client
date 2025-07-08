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

type ModalType =
  | 'Logout'
  | 'AddCustomer'
  | 'ChangePassword'
  | 'EditCustomer'
  | 'ActionModal'
  | 'AddTeam'
  | 'EditTeam'
  | 'AddAppointment'
  | 'EditAppointment'
  | 'ResolveDispute'
  | 'DenyDispute'
  | null;

export type ModalStore = {
  modal: ModalType;
  openModal: (_type: ModalType) => void;
  closeModal: () => void;
};

export type TableStore = {
  selectedId: string | null;
  setId: (_id: string) => void;
  resetSelectedId: () => void;
};

export type CustomerFilters = {
  keyword: string;
  plan: string;
  accountStatus: string;
  appointmentStatus: string;
  disputeStatus: string;
  assignedAgents: string[];
  page: number;
  limit: number;
  transactionStatus: string;
  transactionType: string;

  setKeyword: (_value: string) => void;
  setPlan: (_value: string) => void;
  setAccountStatus: (_value: string) => void;
  setDisputeStatus: (_value: string) => void;
  setAppointmentStatus: (_value: string) => void;
  setAssignedAgents: (_values: string[]) => void;
  setPage: (_page: number) => void;
  setLimit: (_limit: number) => void;
  setTransactionStatus: (_value: string) => void;
  setTransactionType: (_value: string) => void;
  resetToDefaults: () => void;
};
