export type LoginRequest = {
  email: string;
  password: string;
};

export type ResetPasswordRequest = {
  token: string;
  password: string;
  confirmPassword: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  timeZone: string;
  disputeFeeAmount?: number;
  role: string;
  status: string;
};

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

export type APIError = {
  response?: {
    data: {
      message: string;
    };
  };
  message?: string;
};
