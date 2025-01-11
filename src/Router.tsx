import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { lazy, Suspense } from 'react';
import Layout from '@/components/templates/Layout/Layout';
import Movie from '@/pages/browse/Movie/Movie';
import Favorite from '@/pages/browse/Favorite/Favorite';
import Tv from '@/pages/browse/Tv/Tv';

const MovieDetail = lazy(() => import('@/pages/content/MovieDetail/MovieDetail'));
const VideoPlayer = lazy(() => import('@/pages/watch/VideoPlayer/VideoPlayer'));
const Search = lazy(() => import('@/pages/search/Search'));
const MovieCredits = lazy(() => import('@/pages/content/MovieDetail/credits/MovieCredits/MovieCredits'));
const PersonWorks = lazy(() => import('./pages/people/PersonWorks/PersonWorks'));

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
          </Route>
          <Route path="content">
            <Route path=":movieId">
              <Route
                index
                element={
                  <Suspense fallback={null}>
                    <MovieDetail />
                  </Suspense>
                }
              />
              <Route
                path="credits"
                element={
                  <Suspense fallback={null}>
                    <MovieCredits />
                  </Suspense>
                }
              />
            </Route>
          </Route>
          <Route path="people">
            <Route
              path=":personId"
              element={
                <Suspense fallback={null}>
                  <PersonWorks />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="search"
            element={
              <Suspense fallback={null}>
                <Search />
              </Suspense>
            }
          />
        </Route>
        <Route path="watch">
          <Route
            path=":videoId"
            element={
              <Suspense fallback={null}>
                <VideoPlayer />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
