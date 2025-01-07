import { IMovieDetailResponse } from '../movie/movie.types';

interface ISearchResultData extends IMovieDetailResponse {
  mediaType: 'movie' | 'person' | 'tv';
}

export interface ISearchResponse {
  results: ISearchResultData[];
}
