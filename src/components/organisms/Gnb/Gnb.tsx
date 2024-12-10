import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/icons/logo.svg';
import Search from '@/assets/icons/search.svg';
import Star from '@/assets/icons/star.svg';
import Inventory from '@/assets/icons/inventory.svg';
import InactiveBell from '@/assets/icons/bell.svg';
import ActiveBell from '@/assets/icons/bell-filled.svg';
import { PATH } from '@/constants/path';
import * as S from './Gnb.styles';

const Gnb = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBellOpen, setIsBellOpen] = useState(false);

  const navigate = useNavigate();
  const handleSearchClick = () => navigate(PATH.SEARCH);
  const handleBellClick = () => setIsBellOpen((prev) => !prev);

  return (
    <S.Container>
      <S.LeftContainer>
        <S.LogoWrapper to="/">
          <Logo width="88" height="26" />
        </S.LogoWrapper>
        <S.Category to={PATH.BROWSE.VIDEO}>구독</S.Category>
        <S.Category to={PATH.BROWSE.THEATER}>개별 구매</S.Category>
        <S.Category to={PATH.BROWSE.WEBTOON}>웹툰</S.Category>
        <S.Category to={PATH.BROWSE.PARTIES}>왓챠파티</S.Category>
      </S.LeftContainer>
      <S.RightContainer>
        <S.Form>
          <S.Label onClick={handleSearchClick}>
            <Search width="20" height="20" />
            <S.Input type="search" placeholder="콘텐츠, 태그, 인물, 리스트 검색" />
          </S.Label>
        </S.Form>
        {isLoggedIn && (
          <S.MyList>
            <Star width="24" height="24" />
            <Inventory width="24" height="24" />
          </S.MyList>
        )}
        <S.Bell onClick={handleBellClick}>
          {isBellOpen ? <ActiveBell width="24" height="24" /> : <InactiveBell width="24" height="24" />}
        </S.Bell>
        {isLoggedIn ? (
          <S.Profile>
            <img src="https://placehold.co/100x100" alt="profile image" />
          </S.Profile>
        ) : (
          <>
            <li>
              <S.LogIn to={PATH.AUTH.LOGIN}>로그인</S.LogIn>
            </li>
            <li>
              <S.SignUp to={PATH.AUTH.SIGNUP}>회원가입</S.SignUp>
            </li>
          </>
        )}
      </S.RightContainer>
    </S.Container>
  );
};

export default Gnb;
