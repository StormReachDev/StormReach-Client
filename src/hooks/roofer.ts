// Imports:
import RooferService from '@/services/Roofer';
import { RoofersResponse } from '@/types/Api/Roofer';
import { useQuery } from '@tanstack/react-query';

function useAllRoofers() {
  return useQuery<RoofersResponse, Error>({
    queryKey: ['roofers'],
    queryFn: RooferService.roofers,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });
}

export { useAllRoofers };
