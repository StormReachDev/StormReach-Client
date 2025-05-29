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

export const sidebarItems: SidebarItem[] = [
  {
    icon: House,
    label: 'Dashboard',
    active: true,
  },

  {
    icon: UsersRound,
    label: 'Customers',
    active: false,
  },

  {
    icon: ChartNoAxesColumn,
    label: 'Credits & Transactions',
    active: false,
  },

  {
    icon: OctagonAlert,
    label: 'Disputes',
    active: false,
  },

  {
    icon: CalendarDays,
    label: 'Appointments Log',
    active: false,
  },

  {
    icon: UserRound,
    label: 'Team Management',
    active: false,
  },

  {
    icon: Settings,
    label: 'Settings',
    active: false,
  },

  {
    icon: LogOut,
    label: 'Logout',
    active: false,
  },
];
