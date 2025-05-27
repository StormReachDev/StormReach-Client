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
  password: string;
  phone: string;
  timeZone: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

// Response types for authentication API:
export interface LoginResponse extends User {
  success: boolean;
  token: string;
}

export type GenericResponse = {
  success: boolean;
  message: string;
};

export type ErrorResponse = {
  response?: {
    data: {
      message: string;
    };
  };
};
