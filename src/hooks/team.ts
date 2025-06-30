// Imports:
import { QueryKeys } from '@/constants/Keys';
import queryClient from '@/lib/queryClient';
import TeamService from '@/services/Team';
import { APIError, GenericResponse } from '@/types/Api/Auth';
import {
  TeamMemberRequest,
  TeamMemberResponse,
  TeamMembersResponse,
} from '@/types/Api/Team';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

function useCreateTeamMember() {
  return useMutation<GenericResponse, Error, TeamMemberRequest>({
    mutationFn: TeamService.createMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.TEAM_MEMBERS] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.USER_ROLE_SUMMARY] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.SALES_AGENTS] });
      toast.success('Team member created successfully.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

function useAllMembers(
  keyword?: string,
  accountStatus?: string,
  page?: number,
  limit?: number
) {
  return useQuery<TeamMembersResponse, Error>({
    queryKey: [QueryKeys.TEAM_MEMBERS, keyword, accountStatus, page, limit],
    queryFn: () => TeamService.members(keyword, accountStatus, page, limit),
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useMember(id: string) {
  return useQuery<TeamMemberResponse, Error>({
    queryKey: [QueryKeys.TEAM_MEMBER, id],
    queryFn: ({ queryKey }) => TeamService.member(queryKey[1] as string),
    enabled: !!id,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

function useDeleteMember() {
  return useMutation({
    mutationFn: (id: string) => TeamService.deleteMember(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.TEAM_MEMBERS] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.USER_ROLE_SUMMARY] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.SALES_AGENTS] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.ROOFERS] });
      toast.success('Success! Team member has been deleted successfully.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

function useUpdateMember() {
  return useMutation<GenericResponse, Error, { id: string; data: FormData }>({
    mutationFn: ({ id, data }) => TeamService.updateMember(id, data),
    onSuccess: (_, variables) => {
      const { id } = variables;

      queryClient.invalidateQueries({ queryKey: [QueryKeys.TEAM_MEMBERS] });
      queryClient.invalidateQueries({ queryKey: [QueryKeys.TEAM_MEMBER, id] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.USER_ROLE_SUMMARY] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.SALES_AGENTS] });
      queryClient.refetchQueries({ queryKey: [QueryKeys.ROOFERS] });
      toast.success('Success! Team member updated successfully.');
    },

    onError: (error: APIError) => {
      toast.error(error?.response?.data?.message);
    },
  });
}

export {
  useAllMembers,
  useCreateTeamMember,
  useDeleteMember,
  useMember,
  useUpdateMember,
};
