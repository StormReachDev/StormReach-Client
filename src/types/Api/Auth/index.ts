// Request types for authentication API:
export type LoginRequest = {
  email: string;
  password: string;
};

export type ResetPasswordRequest = {
  token: string;
  password: string;
  confirmPassword: string;
};

// User interface for authentication API:
export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
  timeZone: string;
  disputeFeeAmount: number;
  role: string;
  status: string;
}

export type ChangePasswordRequest = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

export type GenericResponse = {
  success: boolean;
  message?: string;
  token?: string;
  user?: User;
};

export type ErrorResponse = {
  response?: {
    data: {
      message: string;
    };
  };
};

// Error type for API responses:
export type APIError = {
  response?: {
    data: {
      message: string;
    };
  };
  message?: string;
};
