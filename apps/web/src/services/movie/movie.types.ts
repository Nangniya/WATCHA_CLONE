export interface IPopularMovieResponse {
  results: IBaseMovieData[];
}

export interface IBaseMovieData {
  id: number;
  backdropPath: string;
  title: string;
  overview: string;
  name: string;
}

export interface IMovieDetailResponse {
  id: number;
  adult: boolean;
  backdropPath: string;
  posterPath: string;
  title: string;
  overview: string;
  tagline: string;
  popularity: number;
  voteAverage: number;
  voteCount: number;
  runtime: number;
  releaseDate: string;
  originCountry: string[];
  belongsToCollection: {
    id: number;
    name: string;
    posterPath: string;
    backdropPath: string;
  };
  genres: {
    id: number;
    name: string;
  }[];
  productionCompaniew: {
    id: number;
    logoPath: string;
    name: string;
  }[];
}

export interface IMovieVideoResponse {
  id: number;
  results: {
    key: string;
    name: string;
    site: 'YouTube' | 'Vimeo';
  }[];
}

export interface IMovieCreditData {
  id: number;
  // creditId: string;
  knownForDepartment: 'Acting' | 'Writing' | 'Directing';
  name: string;
  profilePath: string;
}

export interface IMovieCreditResponse {
  id: number;
  cast: IMovieCreditData[];
  crew: IMovieCreditData[];
}

export interface ISimilarMovieResponse {
  results: IMovieDetailResponse[];
}
