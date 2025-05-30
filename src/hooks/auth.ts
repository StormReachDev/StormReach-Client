// Imports:
import { ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import queryClient from '@/lib/queryClient';
import AuthService from '@/services/auth/';
import { useScreenStore } from '@/stores/useScreenStore';
import {
  GenericResponse,
  LoginRequest,
  LoginResponse,
  ResetPasswordRequest,
} from '@/types/Api/Auth';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

// Custom Hooks for Authentication:
function useLogin() {
  const router = useRouter();

  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: AuthService.login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      router.push(ABSOLUTE_ROUTES.DASHBOARD);
      toast.success('Welcome back! You are now logged in.');
    },

    onError: (error: {
      response?: {
        data: {
          message: string;
        };
      };
      message?: string;
    }) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// Custom Hook to Fetch User Data:
function useMe() {
  return useQuery<GenericResponse, Error>({
    queryKey: ['user'],
    queryFn: AuthService.me,
    staleTime: 5 * 60 * 1000,
  });
}

// Custom Hook for Forgot Password:
function useForgotPassword() {
  return useMutation<GenericResponse, Error, string>({
    mutationFn: AuthService.forgotPassword,

    onSuccess: () => {
      toast.success(
        "We've emailed a password reset link to you. Please check your inbox to proceed."
      );
    },

    onError: (error: {
      response?: {
        data: {
          message: string;
        };
      };
      message?: string;
    }) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// Custom Hook for Resetting Password:
function useResetPassword() {
  const router = useRouter();
  const { setScreen } = useScreenStore();

  return useMutation<GenericResponse, Error, ResetPasswordRequest>({
    mutationFn: AuthService.resetPassword,
    onSuccess: () => {
      router.push(ABSOLUTE_ROUTES.ROOT);
      setScreen('login');
      toast.success(
        'Success! You’ve reset your password. Go ahead and sign in.'
      );
    },

    onError: (error: {
      response?: {
        data: {
          message: string;
        };
      };
      message?: string;
    }) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

// Custom Hook for Logout:
function useLogout() {
  const router = useRouter();

  return useMutation<GenericResponse, Error>({
    mutationFn: AuthService.logout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['user'] });
      router.push(ABSOLUTE_ROUTES.ROOT);
      toast.success('You’ve successfully signed out.');
    },

    onError: (error: {
      response?: {
        data: {
          message: string;
        };
      };
      message?: string;
    }) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

export { useForgotPassword, useLogin, useLogout, useMe, useResetPassword };
