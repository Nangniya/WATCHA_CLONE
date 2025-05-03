import { convertSnakeToCamel } from '@/utils/formatters';
import { movieApi } from '../api/instance';
import { IPopularMovieResponse } from '../movie/movie.types';

export const getPopularTvs = async (params = {}): Promise<IPopularMovieResponse> => {
  const { data } = await movieApi.get('/tv/popular', {
    params: {
      language: 'ko-KR',
      ...params,
    },
  });
  return convertSnakeToCamel(data);
};
