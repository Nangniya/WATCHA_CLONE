import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import Tab from '@/components/atoms/Tab/Tab';
import Modal from '@/components/templates/Modal/Modal';
import useModal from '@/hooks/useModal';
import Popular from './Popular/Popular';
import { TTVTab } from './Tv.types';
import * as S from './Tv.styles';

const Tv = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentTab = searchParams.get('tab') as TTVTab | null;

  const { isModalOpened, openModal, closeModal } = useModal();
  const [modalText, setModalText] = useState('');

  const handleTabClick = (tab: string) => {
    setModalText(`${tab} 프로그램은\n준비중입니다.`);
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
            text="오늘 방영"
            isActive={currentTab === 'airing_today'}
            onClick={() => {
              handleTabClick('오늘 방영');
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
            text="TV 방영 중"
            isActive={currentTab === 'on_the_air'}
            onClick={() => {
              handleTabClick('TV 방영 중');
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

export default Tv;
