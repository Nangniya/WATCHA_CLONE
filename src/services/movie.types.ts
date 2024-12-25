export interface IPopularMovieResponse {
  results: IBaseMovieData[];
}

export interface IBaseMovieData {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
}
