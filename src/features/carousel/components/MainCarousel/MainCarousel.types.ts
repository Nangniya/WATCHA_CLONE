import { IBaseMovieData } from '@/services/movie/movie.types';

export interface IProps {
  data: IBaseMovieData[] | null;
}

export type Direction = 'next' | 'prev';
