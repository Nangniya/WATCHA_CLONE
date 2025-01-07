import { IMovieDetailResponse } from '../movie/movie.types';

interface ISearchResultData extends IMovieDetailResponse {
  mediaType: 'movie' | 'person' | 'tv';
  profilePath: string;
  name: string;
}

export interface ISearchResponse {
  results: ISearchResultData[];
}
