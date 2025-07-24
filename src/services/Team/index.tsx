// Imports:
import { API_ABSOLUTE_ROUTES } from '@/constants/Paths/Routes';
import axiosInstance from '@/lib/axios';
import { GenericResponse } from '@/types/Api/Auth';
import {
  TeamMemberRequest,
  TeamMemberResponse,
  TeamMembersResponse,
} from '@/types/Api/Team';
import qs from 'qs';

const TeamService = {
  createMember: async (data: TeamMemberRequest): Promise<GenericResponse> => {
    const response = await axiosInstance.post(
      API_ABSOLUTE_ROUTES.CREATE_MEMBER,
      data
    );

    return response.data;
  },

  members: async (
    keyword?: string,
    accountStatus?: string,
    page?: number,
    limit?: number
  ): Promise<TeamMembersResponse> => {
    const response = await axiosInstance.get(
      API_ABSOLUTE_ROUTES.GET_ALL_TEAM_MEMBERS,
      {
        params: {
          keyword: keyword ?? '',
          type: 'adminTeamMembers',
          accountStatus: accountStatus ?? '',
          page,
          limit,
        },
        paramsSerializer: (params) =>
          qs.stringify(params, { arrayFormat: 'repeat' }),
      }
    );
    return response.data;
  },

  member: async (id: string): Promise<TeamMemberResponse> => {
    const response = await axiosInstance.get(
      `${API_ABSOLUTE_ROUTES.SINGLE_MEMBER}/${id}`
    );
    return response.data;
  },

  deleteMember: async (id: string): Promise<void> => {
    await axiosInstance.delete(`${API_ABSOLUTE_ROUTES.SINGLE_MEMBER}/${id}`);
  },

  updateMember: async (
    id: string,
    data: FormData
  ): Promise<GenericResponse> => {
    const response = await axiosInstance.put(
      `${API_ABSOLUTE_ROUTES.SINGLE_MEMBER}/${id}`,
      data
    );
    return response.data;
  },
};

export default TeamService;
