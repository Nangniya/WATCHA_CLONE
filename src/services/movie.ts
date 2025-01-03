import { convertSnakeToCamel } from '@/utils/formatters';
import { IPopularMovieResponse } from './movie.types';

export const getPopularMovies = async (): Promise<IPopularMovieResponse> => {
  const response = await fetch(`${process.env.MOVIE_API_URL}/movie/popular?language=ko-KR`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_ACCESS_TOKEN}`,
    },
  });
  const result = await response.json();
  return convertSnakeToCamel(result);
};

export const getPopularMovies2 = async (): Promise<IPopularMovieResponse> => {
  const response = await fetch(`${process.env.MOVIE_API_URL}/movie/popular?language=ko-KR&page=2`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_ACCESS_TOKEN}`,
    },
  });
  const result = await response.json();
  return convertSnakeToCamel(result);
};
