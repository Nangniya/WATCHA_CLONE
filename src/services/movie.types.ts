export interface IPopularMovieResponse {
  results: IPopularMovie[];
}

export interface IPopularMovie {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
}
