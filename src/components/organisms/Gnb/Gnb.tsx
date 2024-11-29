import * as S from './Gnb.styles';
import Logo from '../../../assets/icons/logo.svg';

const Gnb = () => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <S.Category to="">구독</S.Category>
      <S.Category to="">개별 구매</S.Category>
      <S.Category to="">웹툰</S.Category>
      <S.Category to="">왓챠파티</S.Category>
    </S.Container>
  );
};

export default Gnb;
