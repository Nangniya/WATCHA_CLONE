import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Tab from '@/components/atoms/Tab/Tab';
import Popular from './Popular/Popular';
import { TMovieTab } from './Movie.types';
import * as S from './Movie.styles';

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentTab = searchParams.get('tab') as TMovieTab | null;

  useEffect(() => {
    if (!currentTab) setSearchParams({ tab: 'popular' });
  }, [currentTab]);

  return (
    <S.Container>
      <S.Hr />
      <S.TabContainer>
        <S.TabUl>
          <Tab text="인기" isActive={currentTab === 'popular'} onClick={() => {}} />
          <Tab text="현재 상영중" isActive={currentTab === 'now_playing'} onClick={() => {}} />
          <Tab text="높은 평점" isActive={currentTab === 'top_rated'} onClick={() => {}} />
          <Tab text="개봉 박두" isActive={currentTab === 'upcoming'} onClick={() => {}} />
        </S.TabUl>
      </S.TabContainer>
      {/* 현재는 인기(Popular)만 구현 -> 추후 탭에 따라 다르게 렌더링 예정 */}
      {currentTab === 'popular' && <Popular />}
    </S.Container>
  );
};

export default Movie;
