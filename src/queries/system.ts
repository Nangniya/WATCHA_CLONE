import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '@/services/notification/notification';

export const useNotification = () => {
  return useQuery({
    queryKey: ['notification'],
    queryFn: getNotifications,
  });
};
