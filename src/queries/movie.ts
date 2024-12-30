import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '@/services/movie/movie';

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ['movie', 'popular'],
    queryFn: getPopularMovies,
  });
};

export const usePopularMovies2 = () => {
  return useQuery({
    queryKey: ['movie', 'popular', '2'],
    queryFn: () => getPopularMovies({ page: 2 }),
  });
};
