export interface IMovieData {
  id: number;
  backdrop_path: string;
  title: string;
}

export interface IProps {
  data: IMovieData[] | null;
}

export type Direction = 'next' | 'prev';
