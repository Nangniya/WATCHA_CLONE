import { IPopularMovie } from '@/services/movie.types';

export interface IProps {
  data: IPopularMovie[] | null;
}

export type Direction = 'next' | 'prev';
