import { useQuery } from '@tanstack/react-query';
import { getPopularMovies } from '@/services/movie';

export const usePopularMovies = () => {
  return useQuery({
    queryKey: ['movie', 'popular', 'main'],
    queryFn: getPopularMovies,
  });
};
