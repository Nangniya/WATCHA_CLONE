import { movieApi } from '../api/instance';
import { IPopularMovieResponse } from './movie.types';
import { convertSnakeToCamel } from '@/utils/formatters';

export const getPopularMovies = async (params = {}): Promise<IPopularMovieResponse> => {
  const { data } = await movieApi.get('/movie/popular', {
    params: {
      language: 'ko-KR',
      ...params,
    },
  });
  return convertSnakeToCamel(data);
};
