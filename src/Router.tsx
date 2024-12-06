import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './components/templates/Layout/Layout';
import Theater from './pages/browse/Theater/Theater';
import Video from './pages/browse/Video/Video';
import Webtoon from './pages/browse/Webtoon/Webtoon';
import Parties from './pages/browse/Parties/Parties';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Theater />} />
          <Route path="browse">
            <Route path="theater" element={<Theater />} />
            <Route path="video" element={<Video />} />
            <Route path="webtoon" element={<Webtoon />} />
            <Route path="parties" element={<Parties />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
