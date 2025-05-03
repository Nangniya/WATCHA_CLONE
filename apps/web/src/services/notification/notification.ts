import { mockApi } from '../api/instance';
import { NOTICELIST } from '@/constants/mock';
import { INotification } from './notification.types';
import { convertSnakeToCamel } from '@/utils/formatters';

export const getNotifications = async (): Promise<INotification[]> => {
  if (process.env.NODE_ENV === 'development') {
    const { data } = await mockApi.get('/notification');
    return convertSnakeToCamel(data);
  }
  return Promise.resolve(NOTICELIST);
};
