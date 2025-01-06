import { useSuspenseQueries, useSuspenseQuery } from '@tanstack/react-query';
import {
  getMovieCredit,
  getMovieDatil,
  getMovieVideo,
  getPopularMovies,
  getSimilarMovies,
} from '@/services/movie/movie';

export const usePopularMovies = (page?: number) => {
  return useSuspenseQuery({
    queryKey: ['movie', 'popular', page],
    queryFn: () => getPopularMovies({ page }),
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

export const useSimilarMovies = (id: number) => {
  return useSuspenseQuery({
    queryKey: ['similar', id],
    queryFn: () => getSimilarMovies(id),
  });
};

export const useAllMovieDetail = (id: number) => {
  return useSuspenseQueries({
    queries: [
      {
        queryKey: ['detail', id],
        queryFn: () => getMovieDatil(id),
      },
      {
        queryKey: ['video', id],
        queryFn: () => getMovieVideo(id),
      },
      {
        queryKey: ['credit', id],
        queryFn: () => getMovieCredit(id),
      },
      {
        queryKey: ['similar', id],
        queryFn: () => getSimilarMovies(id),
      },
    ],
  });
};
