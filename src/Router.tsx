import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import Layout from '@/components/templates/Layout/Layout';
import Movie from '@/pages/browse/Movie/Movie';
import Favorite from '@/pages/browse/Favorite/Favorite';
import Tv from '@/pages/browse/Tv/Tv';
import People from '@/pages/browse/People/People';
import Search from './pages/search/Search';

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
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
