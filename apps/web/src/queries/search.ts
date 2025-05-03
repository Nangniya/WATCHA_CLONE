import { useSuspenseQuery } from '@tanstack/react-query';
import { getSearch } from '@/services/search/search';

export const useSearch = (query: string) => {
  return useSuspenseQuery({
    queryKey: ['search', query],
    queryFn: () => getSearch(query),
  });
};
