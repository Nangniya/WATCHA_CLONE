import { useQuery } from '@tanstack/react-query';
import { getPersonDetail, getPersonMovies } from '@/services/people/people';

export const usePersonMovies = (id: number) => {
  return useQuery({
    queryKey: ['person', 'movies', id],
    queryFn: () => getPersonMovies(id),
  });
};

export const usePersonDetail = (id: number) => {
  return useQuery({
    queryKey: ['person', 'detail', id],
    queryFn: () => getPersonDetail(id),
  });
};
