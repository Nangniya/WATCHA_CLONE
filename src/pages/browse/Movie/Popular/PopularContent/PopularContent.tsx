import CategoryCarousel from '@/features/carousel/components/CategoryCarousel/CategoryCarousel';
import MainCarousel from '@/features/carousel/components/MainCarousel/MainCarousel';
import { usePopularMovies, usePopularMovies2 } from '@/queries/movie';

const PopularContent = () => {
  const { data: popularData } = usePopularMovies();
  const { data: popularData2 } = usePopularMovies2();
  return (
    <>
      <MainCarousel data={popularData?.results.slice(0, 5) || null} />
      <CategoryCarousel type="ranking" category="인기 Top 20" data={popularData?.results || null} />
      <CategoryCarousel category="새로 올라온 콘텐츠" data={popularData2?.results || null} />
    </>
  );
};

export default PopularContent;
