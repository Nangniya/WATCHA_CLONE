import { useSuspenseQuery } from '@tanstack/react-query';
import { getPopularTvs } from '@/services/tv/tv';

export const usePopularTvs = () => {
  return useSuspenseQuery({
    queryKey: ['tv', 'popular'],
    queryFn: () => getPopularTvs(),
  });
};
