import { IMovieDetailResponse } from '@/services/movie/movie.types';

export interface IPersonMoviesResponse {
  id: number;
  cast: IMovieDetailResponse[];
  crew: IMovieDetailResponse[];
}

export interface IPersonDetailResponse {
  id: number;
  name: string;
}
