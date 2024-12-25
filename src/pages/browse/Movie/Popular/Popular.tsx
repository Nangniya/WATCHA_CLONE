import MainCarousel from '@/features/carousel/components/MainCarousel/MainCarousel';
import CategoryCarousel from '@/features/carousel/components/CategoryCarousel/CategoryCarousel';
import { usePopularMovies, usePopularMovies2 } from '@/queries/movie';
import * as S from './Popular.styles';

const Popular = () => {
  const { data: popularData } = usePopularMovies();
  const { data: popularData2 } = usePopularMovies2();
  return (
    <S.Container>
      <MainCarousel data={popularData?.results.slice(0, 5) || null} />
      <CategoryCarousel type="ranking" category="인기 Top 20" data={popularData?.results || null} />
      <CategoryCarousel category="새로 올라온 콘텐츠" data={popularData2?.results || null} />
    </S.Container>
  );
};

export default Popular;
