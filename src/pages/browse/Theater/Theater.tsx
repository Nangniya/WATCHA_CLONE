import Tab from '@/components/atoms/Tab/Tab';
import * as S from './Theater.styles';

const Theater = () => {
  return (
    <S.Container>
      <S.TabContainer>
        <S.TabUl>
          <Tab text="추천" queryValue="all" />
          <Tab text="#왓챠의 발견" queryValue="a" />
          <Tab text="#한국" queryValue="b" />
          <Tab text="#애니메이션" queryValue="c" />
          <Tab text="성인+" queryValue="d" />
        </S.TabUl>
      </S.TabContainer>
    </S.Container>
  );
};

export default Theater;
