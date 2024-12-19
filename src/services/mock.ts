import { NOTICELIST } from '@/constants/mock';
import { INotification } from './mock.types';

export const getNotifications = async (): Promise<INotification[]> => {
  if (process.env.NODE_ENV === 'development') {
    const response = await fetch('https://example.com/notification');
    const result = await response.json();
    return result;
  }
  return Promise.resolve(NOTICELIST);
};
