// Imports:
import {
  AppointmentData,
  DisputeData,
  MonthlyData,
} from '@/types/Custom/Modules/Dashboard';

// Fake data for demonstration purposes:
export const monthlyDisputeData = {
  'This Month': {
    handled: 50,
    approved: 35,
    pending: 15,
  },
  'Last Month': {
    handled: 45,
    approved: 40,
    pending: 15,
  },
  'Last 3 Months': {
    handled: 48,
    approved: 37,
    pending: 15,
  },
  'Last 6 Months': {
    handled: 52,
    approved: 33,
    pending: 15,
  },
} as MonthlyData<DisputeData>;

export const monthlyAppointmentData = {
  'This Month': {
    cancelled: 25,
    remaining: 40,
    completed: 100,
  },
  'Last Month': {
    cancelled: 5,
    remaining: 15,
    completed: 5,
  },
  'Last 3 Months': {
    cancelled: 28,
    remaining: 38,
    completed: 48,
  },
  'Last 6 Months': {
    cancelled: 22,
    remaining: 42,
    completed: 52,
  },
} as MonthlyData<AppointmentData>;
