export interface IPopularMovieResponse {
  results: IBaseMovieData[];
}

export interface IBaseMovieData {
  id: number;
  backdropPath: string;
  title: string;
  overview: string;
}
