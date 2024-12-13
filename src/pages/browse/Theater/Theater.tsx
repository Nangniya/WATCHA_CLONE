import Tab from '@/components/atoms/Tab/Tab';
import * as S from './Theater.styles';

const Theater = () => {
  return (
    <S.Container>
      <S.TabContainer>
        <S.TabUl>
          <li>
            <Tab text="추천" queryValue="all" />
          </li>
          <li>
            <Tab text="#왓챠의 발견" queryValue="a" />
          </li>
          <li>
            <Tab text="#한국" queryValue="b" />
          </li>
          <li>
            <Tab text="#애니메이션" queryValue="c" />
          </li>
          <li>
            <Tab text="성인+" queryValue="d" />
          </li>
        </S.TabUl>
      </S.TabContainer>
    </S.Container>
  );
};

export default Theater;
