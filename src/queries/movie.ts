import { useSuspenseQuery } from '@tanstack/react-query';
import { getMovieCredit, getMovieDatil, getMovieVideo, getPopularMovies } from '@/services/movie/movie';

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

export const useMovieDetail = (id: number) => {
  return useSuspenseQuery({
    queryKey: ['detail', id],
    queryFn: () => getMovieDatil(id),
  });
};

export const useMovieVideo = (id: number) => {
  return useSuspenseQuery({
    queryKey: ['video', id],
    queryFn: () => getMovieVideo(id),
  });
};

export const useMovieCredit = (id: number) => {
  return useSuspenseQuery({
    queryKey: ['credit', id],
    queryFn: () => getMovieCredit(id),
  });
};
