interface IPopularMovieResponse {
  results: IPopularMovie[];
}

interface IPopularMovie {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
}

export const getPopularMovies = async (): Promise<IPopularMovieResponse> => {
  const response = await fetch(`${process.env.MOVIE_API_URL}/movie/popular`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.MOVIE_ACCESS_TOKEN}`,
    },
  });
  const result = await response.json();
  return result;
};
