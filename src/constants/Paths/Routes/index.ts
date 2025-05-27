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
  LOGIN: `${config.API_URL}/user/session`,
  ME: `${config.API_URL}/user/me`,
  FORGOT_PASSWORD: `${config.API_URL}/user/forgot-password`,
  RESET_PASSWORD: `${config.API_URL}/user/reset-password/:token`,
};
