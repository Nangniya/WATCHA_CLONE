import * as S from './Gnb.styles';
import Logo from '@/assets/icons/logo.svg';
import { PATH } from '@/constants/path';

const Gnb = () => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <S.Category to={PATH.BROWSE.VIDEO}>구독</S.Category>
      <S.Category to={PATH.BROWSE.THEATER}>개별 구매</S.Category>
      <S.Category to={PATH.BROWSE.WEBTOON}>웹툰</S.Category>
      <S.Category to={PATH.BROWSE.PARTIES}>왓챠파티</S.Category>
    </S.Container>
  );
};

export default Gnb;
