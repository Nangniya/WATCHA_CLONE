import { useSuspenseQuery } from '@tanstack/react-query';
import { getPopularMovies } from '@/services/movie/movie';

export const usePopularMovies = () => {
  return useSuspenseQuery({
    queryKey: ['movie', 'popular'],
    queryFn: getPopularMovies,
  });
};

export const usePopularMovies2 = () => {
  return useSuspenseQuery({
    queryKey: ['movie', 'popular', '2'],
    queryFn: () => getPopularMovies({ page: 2 }),
  });
};
