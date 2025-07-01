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
}
