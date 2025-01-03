import { convertSnakeToCamel } from '@/utils/formatters';
import { movieApi } from '@/services/api/instance';
import { IPersonDetailResponse, IPersonMoviesResponse } from './people.types';

export const getPersonDetail = async (id: number, params = {}): Promise<IPersonDetailResponse> => {
  const { data } = await movieApi.get(`/person/${id}`, {
    params: {
      language: 'ko-KR',
      ...params,
    },
  });
  return convertSnakeToCamel(data);
};

export const getPersonMovies = async (id: number, params = {}): Promise<IPersonMoviesResponse> => {
  const { data } = await movieApi.get(`/person/${id}/movie_credits`, {
    params: {
      language: 'ko-KR',
      ...params,
    },
  });
  return convertSnakeToCamel(data);
};
