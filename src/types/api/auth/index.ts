// Response types for authentication API:
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
  role: string;
}

// Response types for authentication API:
export type LoginResponse = {
  success: boolean;
  token: string;
};

export type GenericResponse = {
  success: boolean;
  message?: string;
  user?: User;
};

export type ErrorResponse = {
  response?: {
    data: {
      message: string;
    };
  };
};
