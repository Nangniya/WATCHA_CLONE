import { movieApi } from '@/services/api/instance';
import { convertSnakeToCamel } from '@/utils/formatters';
import { ISearchResponse } from './search.types';

export const getSearch = async (query: string, params = {}): Promise<ISearchResponse> => {
  const { data } = await movieApi.get('/search/multi', {
    params: {
      language: 'ko-KR',
      query,
      ...params,
    },
  });
  return convertSnakeToCamel(data);
};
