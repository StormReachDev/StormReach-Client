import { config } from '@/config/EnvironmentVariables';

// ******** Root ********
const ROOT = '/';

// ******** Dashboard ********
const DASHBOARD = 'dashboard';

// ******** Relative Routes ********
export const RELATIVE_ROUTES = {
  ROOT,
  DASHBOARD,
};

// ******** Absolute Routes ********
export const ABSOLUTE_ROUTES = {
  ROOT: `${ROOT}`,
  DASHBOARD: `${ROOT + DASHBOARD}`,
};

// ******** Protected Routes ********
const PROTECTED_ROUTES = [ABSOLUTE_ROUTES.DASHBOARD];
export const PROTECTED_ROUTES_SET = new Set(PROTECTED_ROUTES);

// ******** API Routes ********
export const API_ABSOLUTE_ROUTES = {
  // ******** Auth ********
  LOGIN: `${config.PROD_API_URL}/user/session`,
  ME: `${config.PROD_API_URL}/user/me`,
  FORGOT_PASSWORD: `${config.PROD_API_URL}/user/forgot-password`,
  RESET_PASSWORD: `${config.PROD_API_URL}/user/reset-password/:token`,
  CHANGE_PASSWORD: `${config.PROD_API_URL}/user/change-password`,

  // ******** Meta ********
  GET_PLANS: `${config.PROD_API_URL}/meta/plans`,
  GET_ACCOUNT_STATUSES: `${config.PROD_API_URL}/meta/account-statuses`,
  GET_USER_ROLE_SUMMARY: `${config.PROD_API_URL}/meta/user-role-summary`,
  GET_TRANSACTION_TYPES: `${config.PROD_API_URL}/meta/transaction-types`,
  GET_TRANSACTION_STATUSES: `${config.PROD_API_URL}/meta/transaction-statuses`,
  GET_CUSTOMER_METRICS: `${config.PROD_API_URL}/meta/customer-metrics`,
  GET_TRANSACTION_METRICS: `${config.PROD_API_URL}/meta/transaction-metrics`,
  GET_USER_ROLES: `${config.PROD_API_URL}/meta/user-roles`,
  GET_APPOINTMENT_METRICS: `${config.PROD_API_URL}/meta/appointment-metrics`,
  GET_APPOINTMENT_STATUSES: `${config.PROD_API_URL}/meta/appointment-statuses`,
  GET_ACTIVE_LEAKS: `${config.PROD_API_URL}/meta/active-leaks`,
  GET_DISPUTE_METRICS: `${config.PROD_API_URL}/meta/dispute-metrics`,

  // ******** Sales Agent ********
  GET_SALES_AGENTS: `${config.PROD_API_URL}/sales-agents`,

  // ******** Customer ********
  PURCHASE_PLAN: `${config.PROD_API_URL}/customer/purchase-plan`,
  GET_ALL_ROOFERS: `${config.PROD_API_URL}/customer/all`,
  SINGLE_ROOFER: `${config.PROD_API_URL}/customer`,

  // ******** Transaction ********
  GET_ALL_TRANSACTIONS: `${config.PROD_API_URL}/transaction/all`,
  SINGLE_TRANSACTION: `${config.PROD_API_URL}/transaction`,

  // ******** Team ********
  CREATE_MEMBER: `${config.PROD_API_URL}/user/create`,
  GET_ALL_TEAM_MEMBERS: `${config.PROD_API_URL}/team/all`,
  SINGLE_MEMBER: `${config.PROD_API_URL}/team`,

  // ******** Notification ********
  GET_NOTIFICATIONS: `${config.PROD_API_URL}/notifications`,

  // ******** Appointment ********
  GET_APPOINTMENTS: `${config.PROD_API_URL}/appointment/all`,
  GET_DISPUTES: `${config.PROD_API_URL}/dispute/all`,
  CREATE_APPOINTMENT: `${config.PROD_API_URL}/appointment/create`,
  APPOINTMENT: `${config.PROD_API_URL}/appointment`,
  DISPUTE: `${config.PROD_API_URL}/dispute`,
};
