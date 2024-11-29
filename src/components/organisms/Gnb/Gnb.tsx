import * as S from './Gnb.styles';

const Gnb = () => {
  return (
    <S.Container>
      <S.Category to="">구독</S.Category>
      <S.Category to="">개별 구매</S.Category>
      <S.Category to="">웹툰</S.Category>
      <S.Category to="">왓챠파티</S.Category>
    </S.Container>
  );
};

export default Gnb;
