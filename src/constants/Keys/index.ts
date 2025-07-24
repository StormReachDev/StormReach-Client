export enum QueryKeys {
  USER = 'user',
  PLANS = 'plans',
  ACCOUNT_STATUSES = 'account-statuses',
  ROOFERS = 'roofers',
  ROOFER = 'roofer',
  USER_ROLE_SUMMARY = 'user-role-summary',
  SALES_AGENTS = 'sales-agents',
  TRANSACTION_TYPES = 'transaction-types',
  TRANSACTION_STATUSES = 'transaction-statuses',
  TRANSACTIONS = 'transactions',
  CUSTOMER_METRICS = 'customer-metrics',
  TRANSACTION_METRICS = 'transaction-metrics',
  USER_ROLES = 'user-roles',
  TEAM_MEMBERS = 'team-members',
  TEAM_MEMBER = 'team-member',
  NOTIFICATIONS = 'notifications',
  APPOINTMENT_METRICS = 'appointment-metrics',
  APPOINTMENT_STATUSES = 'appointment-statuses',
  APPOINTMENTS = 'appointments',
  APPOINTMENT = 'appointment',
  ACTIVE_LEAKS = 'active-leaks',
  DISPUTE_METRICS = 'dispute-metrics',
  DISPUTES = 'disputes',
  DISPUTE = 'dispute',
  CLOUDINARY_IMAGE = 'cloudinary-image',
  APPOINTMENTS_PER_DAY = 'appointments-per-day',
  CUSTOMER_APPOINTMENTS = 'customer-appointments',
  CUSTOMER_APPOINTMENT_METRICS = 'customer-appointment-metrics',
  FLAG_APPOINTMENT = 'flag-appointment',
  DISPUTE_REASONS = 'dispute-reasons',
  CUSTOMER_TRANSACTIONS = 'customer-transactions',
  ROOFER_SETTINGS = 'roofer-settings',
}

export const PlanKeys = {
  'Strike 10': 'strike10',
  'Surge 30': 'surge30',
  'Blackout 60': 'blackout60',
  'Pay As You Go': 'payAsYouGo',
};

export enum AccountStatusKeys {
  active = 'Active',
  paused = 'Paused',
  flagged = 'Flagged',
}

export enum TransactionTypeKeys {
  plan = 'Plan',
  refund = 'Refund',
}

export enum UserRoleKeys {
  admin = 'Admin',
  manager = 'Manager',
  salesAgent = 'Sales Agent',
  telemarketer = 'Telemarketer',
  roofer = 'Roofer',
}

export enum AppointmentStatusKeys {
  completed = 'Completed',
  disputed = 'Disputed',
  scheduled = 'Scheduled',
  pending = 'Pending',
  denied = 'Denied',
}

export const AppointmentCreditKeys = {
  'Strike 10': 10,
  'Surge 30': 30,
  'Blackout 60': 60,
  'Pay As You Go': 1,
};
