import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import Tab from '@/components/atoms/Tab/Tab';
import Modal from '@/components/templates/Modal/Modal';
import useModal from '@/hooks/useModal';
import Popular from './Popular/Popular';
import { TMovieTab } from './Movie.types';
import * as S from './Movie.styles';

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentTab = searchParams.get('tab') as TMovieTab | null;

  const { isModalOpened, openModal, closeModal } = useModal();
  const [modalText, setModalText] = useState('');

  const handleTabClick = (tab: string) => {
    setModalText(`${tab} 영화는\n준비중입니다.`);
    openModal();
  };

  useEffect(() => {
    if (!currentTab) setSearchParams({ tab: 'popular' });
  }, [currentTab]);

  return (
    <S.Container>
      <S.Hr />
      <S.TabContainer>
        <S.TabUl>
          <Tab
            text="인기"
            isActive={currentTab === 'popular'}
            onClick={() => {
              handleTabClick('인기');
            }}
          />
          <Tab
            text="현재 상영중"
            isActive={currentTab === 'now_playing'}
            onClick={() => {
              handleTabClick('현재 상영중');
            }}
          />
          <Tab
            text="높은 평점"
            isActive={currentTab === 'top_rated'}
            onClick={() => {
              handleTabClick('높은 평점');
            }}
          />
          <Tab
            text="개봉 예정"
            isActive={currentTab === 'upcoming'}
            onClick={() => {
              handleTabClick('개봉 예정');
            }}
          />
        </S.TabUl>
      </S.TabContainer>
      {/* 현재는 인기(Popular)만 구현 -> 추후 탭에 따라 다르게 렌더링 예정 */}
      {currentTab === 'popular' && <Popular />}
      {isModalOpened && <Modal text={modalText} onClose={closeModal} />}
    </S.Container>
  );
};

export default Movie;
