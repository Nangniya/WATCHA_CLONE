import { NOTICELIST } from '@/constants/mock';
import { INotification } from './mock.types';
import { convertSnakeToCamel } from '@/utils/formatters';

export const getNotifications = async (): Promise<INotification[]> => {
  if (process.env.NODE_ENV === 'development') {
    const response = await fetch('https://example.com/notification');
    const result = await response.json();
    return convertSnakeToCamel(result);
  }
  return Promise.resolve(NOTICELIST);
};
