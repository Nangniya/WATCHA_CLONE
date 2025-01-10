import Tab from '@/components/atoms/Tab/Tab';
import * as S from './Tv.styles';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { TTVTab } from './Tv.types';
import Popular from './Popular/Popular';

const Tv = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentTab = searchParams.get('tab') as TTVTab | null;

  useEffect(() => {
    if (!currentTab) setSearchParams({ tab: 'popular' });
  }, [currentTab]);
  return (
    <S.Container>
      <S.Hr />
      <S.TabContainer>
        <S.TabUl>
          <Tab text="인기" isActive={currentTab === 'popular'} onClick={() => {}} />
          <Tab text="오늘 방영" isActive={currentTab === 'airing_today'} onClick={() => {}} />
          <Tab text="높은 평점" isActive={currentTab === 'top_rated'} onClick={() => {}} />
          <Tab text="TV 방영 중" isActive={currentTab === 'on_the_air'} onClick={() => {}} />
        </S.TabUl>
      </S.TabContainer>
      {/* 현재는 인기(Popular)만 구현 -> 추후 탭에 따라 다르게 렌더링 예정 */}
      {currentTab === 'popular' && <Popular />}
    </S.Container>
  );
};

export default Tv;
