// Imports:
import { config } from '@/config/EnvironmentVariables';
import { QueryKeys } from '@/constants/Keys';
import { ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import queryClient from '@/lib/queryClient';
import AuthService from '@/services/Auth';
import { useScreenStore } from '@/stores/useScreenStore';
import { useSidebarStore } from '@/stores/useSidebarStore';
import {
  APIError,
  ChangePasswordRequest,
  GenericResponse,
  LoginRequest,
  ResetPasswordRequest,
  User,
} from '@/types/Api/Auth';
import { useMutation, useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

function useLogin() {
  const router = useRouter();

  return useMutation<GenericResponse, Error, LoginRequest>({
    mutationFn: AuthService.login,
    onSuccess: (data) => {
      Cookies.set(config.COOKIE_NAME, String(data?.token), {
        expires: Number(config.COOKIE_EXPIRE),
        sameSite: 'Lax', // Ensures the cookie is sent with same-site requests, not with cross-site requests, which helps prevent CSRF attacks.
      });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.USER] });
      router.push(ABSOLUTE_ROUTES.DASHBOARD);
      toast.success('Welcome back! You are now logged in.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

function useMe() {
  return useQuery<GenericResponse, Error>({
    queryKey: [QueryKeys.USER],
    queryFn: AuthService.me,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useForgotPassword() {
  return useMutation<GenericResponse, Error, string>({
    mutationFn: AuthService.forgotPassword,

    onSuccess: () => {
      toast.success(
        "We've emailed a password reset link to you. Please check your inbox to proceed."
      );
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

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

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

function useLogout() {
  const router = useRouter();
  const { setActiveItem } = useSidebarStore();

  return () => {
    Cookies.remove(config.COOKIE_NAME);
    queryClient.clear();
    router.push(ABSOLUTE_ROUTES.ROOT);
    toast.success('You’ve successfully signed out.');
    setActiveItem('Dashboard');
  };
}

function useUpdateProfile() {
  return useMutation<GenericResponse, Error, Partial<User>>({
    mutationFn: AuthService.updateProfile,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.USER] });
      toast.success('Success! Your profile is now up to date.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

function useChangePassword() {
  return useMutation<GenericResponse, Error, ChangePasswordRequest>({
    mutationFn: AuthService.changePassword,

    onSuccess: (data) => {
      Cookies.set(config.COOKIE_NAME, String(data?.token), {
        expires: Number(config.COOKIE_EXPIRE),
        sameSite: 'Lax',
      });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.USER] });
      toast.success('Success! Your password has been updated.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

export {
  useChangePassword,
  useForgotPassword,
  useLogin,
  useLogout,
  useMe,
  useResetPassword,
  useUpdateProfile,
};
