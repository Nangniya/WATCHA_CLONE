import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import Layout from '@/components/templates/Layout/Layout';
import Movie from '@/pages/browse/Movie/Movie';
import Favorite from '@/pages/browse/Favorite/Favorite';
import Tv from '@/pages/browse/Tv/Tv';
import People from '@/pages/browse/People/People';
import MovieDetail from '@/pages/content/MovieDetail/MovieDetail';
import VideoPlayer from '@/pages/watch/VideoPlayer/VideoPlayer';
import Search from '@/pages/search/Search';
import MovieCredits from '@/pages/content/MovieDetail/credits/MovieCredits/MovieCredits';
import PersonWorks from './pages/browse/People/PersonWorks/PersonWorks';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/browse/movie" replace />} />
          <Route path="browse">
            <Route path="favorite" element={<Favorite />} />
            <Route path="movie" element={<Movie />} />
            <Route path="tv" element={<Tv />} />
            <Route path="people" element={<People />} />
          </Route>
          <Route path="content">
            <Route path=":movieId">
              <Route index element={<MovieDetail />} />
              <Route path="credits" element={<MovieCredits />} />
            </Route>
          </Route>
          <Route path="people">
            <Route path=":personId" element={<PersonWorks />} />
          </Route>
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="watch">
          <Route path=":videoId" element={<VideoPlayer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
