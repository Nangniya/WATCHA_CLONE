import CategoryCarousel from '@/features/carousel/components/CategoryCarousel/CategoryCarousel';
import MainCarousel from '@/features/carousel/components/MainCarousel/MainCarousel';
import { usePopularMovies } from '@/queries/movie';

const PopularContent = () => {
  const { data: popularMovies1 } = usePopularMovies();
  const { data: popularMovies2 } = usePopularMovies(2);

  return (
    <>
      <MainCarousel data={popularMovies1?.results.slice(0, 5) || null} />
      <CategoryCarousel type="ranking" category="인기 Top 20" data={popularMovies1?.results || null} />
      <CategoryCarousel category="새로 올라온 콘텐츠" data={popularMovies2?.results || null} />
    </>
  );
};

export default PopularContent;
