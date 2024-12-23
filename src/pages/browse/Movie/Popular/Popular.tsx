import MainCarousel from '@/features/carousel/components/MainCarousel/MainCarousel';
import { usePopularMovies } from '@/queries/movie';
import * as S from './Popular.styles';

const Popular = () => {
  const { data } = usePopularMovies();
  return (
    <S.Container>
      <MainCarousel data={data?.results || null} />
    </S.Container>
  );
};

export default Popular;
