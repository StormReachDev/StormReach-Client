export const config = {
  PROD_API_URL: process.env.NEXT_PUBLIC_PROD_API_URL || '',
  STAGING_API_URL: process.env.NEXT_PUBLIC_STAGING_API_URL || '',
  API_KEY: process.env.NEXT_PUBLIC_API_KEY || '',
  COOKIE_NAME: process.env.NEXT_PUBLIC_COOKIE_NAME || '',
  COOKIE_EXPIRE: process.env.NEXT_PUBLIC_COOKIE_EXPIRE || '',
};
