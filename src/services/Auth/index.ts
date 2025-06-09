// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import {
  ChangePasswordRequest,
  GenericResponse,
  LoginRequest,
  ResetPasswordRequest,
  User,
} from '../../types/Api/Auth';

const AuthService = {
  login: async (credentials: LoginRequest): Promise<GenericResponse> => {
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

  me: async (): Promise<GenericResponse> => {
    const response = await axiosInstance.get(API_ABSOLUTE_ROUTES.ME);

    return response.data;
  },

  updateProfile: async (data: Partial<User>): Promise<GenericResponse> => {
    const response = await axiosInstance.put(API_ABSOLUTE_ROUTES.ME, data);

    return response.data;
  },

  changePassword: async (
    data: ChangePasswordRequest
  ): Promise<GenericResponse> => {
    const response = await axiosInstance.put(
      API_ABSOLUTE_ROUTES.CHANGE_PASSWORD,
      data
    );

    return response.data;
  },
};

export default AuthService;
