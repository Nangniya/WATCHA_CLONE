import { IBaseMovieData } from '@/services/movie/movie.types';

export interface IProps {
  type?: CarouselType;
  category: string;
  data: IBaseMovieData[] | null;
}

export type CarouselType = 'ranking' | 'normal';
