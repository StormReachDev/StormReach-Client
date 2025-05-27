// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import {
  GenericResponse,
  LoginRequest,
  LoginResponse,
  ResetPasswordRequest,
} from '@/types/api/auth';

const AuthService = {
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    const response = await axiosInstance.post(
      API_ABSOLUTE_ROUTES.LOGIN,
      credentials
    );

    return response.data;
  },

  forgotPassword: async (email: string): Promise<GenericResponse> => {
    const response = await axiosInstance.post(
      API_ABSOLUTE_ROUTES.FORGOT_PASSWORD,
      { email }
    );

    return response.data;
  },

  resetPassword: async (
    data: ResetPasswordRequest
  ): Promise<GenericResponse> => {
    const response = await axiosInstance.put(
      API_ABSOLUTE_ROUTES.RESET_PASSWORD.replace(':token', data.token),
      {
        password: data.password,
        confirmPassword: data.confirmPassword,
      }
    );

    return response.data;
  },

  me: async (): Promise<LoginResponse> => {
    const response = await axiosInstance.get(API_ABSOLUTE_ROUTES.LOGIN);

    return response.data;
  },
};

export default AuthService;
