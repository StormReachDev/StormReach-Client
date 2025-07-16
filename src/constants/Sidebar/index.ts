// Imports:
import { SidebarItem } from '@/types/Custom/Sidebar';
import {
  CalendarDays,
  ChartNoAxesColumn,
  House,
  LogOut,
  OctagonAlert,
  Settings,
  UserRound,
  UsersRound,
} from 'lucide-react';

export const adminSidebarItems: SidebarItem[] = [
  {
    icon: House,
    label: 'Dashboard',
  },

  {
    icon: UsersRound,
    label: 'Customers',
  },

  {
    icon: ChartNoAxesColumn,
    label: 'Credits & Transactions',
  },

  {
    icon: OctagonAlert,
    label: 'Disputes',
  },

  {
    icon: CalendarDays,
    label: 'Appointments Log',
  },

  {
    icon: UserRound,
    label: 'Team Management',
  },

  {
    icon: Settings,
    label: 'Settings',
  },

  {
    icon: LogOut,
    label: 'Logout',
  },
];

export const rooferSidebarItems: SidebarItem[] = [
  {
    icon: House,
    label: 'Dashboard',
  },

  {
    icon: LogOut,
    label: 'Logout',
  },
];
