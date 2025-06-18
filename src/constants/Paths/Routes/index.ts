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
  LOGIN: `${config.STAGING_API_URL}/user/session`,
  ME: `${config.STAGING_API_URL}/user/me`,
  FORGOT_PASSWORD: `${config.STAGING_API_URL}/user/forgot-password`,
  RESET_PASSWORD: `${config.STAGING_API_URL}/user/reset-password/:token`,
  CHANGE_PASSWORD: `${config.STAGING_API_URL}/user/change-password`,

  // ******** Meta ********
  GET_ALL_PLANS: `${config.STAGING_API_URL}/meta/plans`,
  GET_ACCOUNT_STATUSES: `${config.STAGING_API_URL}/meta/account-statuses`,

  // ******** Sales Agent ********
  GET_SALES_AGENTS: `${config.STAGING_API_URL}/sales-agents`,

  // ******** Customer ********
  PURCHASE_PLAN: `${config.STAGING_API_URL}/customer/purchase-plan`,
  GET_ALL_ROOFERS: `${config.STAGING_API_URL}/customer/all`,
};
