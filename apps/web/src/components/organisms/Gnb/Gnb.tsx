import { useRef, useState } from 'react';
import { useLocation } from 'react-router';
import NavLink from '@/components/atoms/NavLink/NavLink';
import Notification from '@/components/organisms/Notification/Notification';
import SearchField from '@/features/search/components/molcules/SearchField/SearchField';
// import Star from '@/assets/icons/star.svg';
// import Inventory from '@/assets/icons/inventory.svg';
import InactiveBell from '@/assets/icons/bell.svg';
import ActiveBell from '@/assets/icons/bell-filled.svg';
import { PATH } from '@/constants/path';
import { useOutSideClick } from '@/hooks/useOutSideClick';
import * as S from './Gnb.styles';

const Gnb = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBellOpen, setIsBellOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  const handleBellClick = () => setIsBellOpen((prev) => !prev);
  const closeNotification = () => {
    if (isBellOpen) setIsBellOpen(false);
  };

  useOutSideClick(notificationRef, closeNotification);

  return (
    <S.Container>
      <S.LeftContainer>
        <S.LogoWrapper to="/">
          <S.Logo>NANGNIYA</S.Logo>
        </S.LogoWrapper>
        <NavLink to={PATH.BROWSE.FAVORITE} text="찜" isActive={pathname === PATH.BROWSE.FAVORITE} />
        <NavLink to={PATH.BROWSE.MOVIE} text="영화" isActive={pathname === PATH.BROWSE.MOVIE} />
        <NavLink to={PATH.BROWSE.TV} text="TV" isActive={pathname === PATH.BROWSE.TV} />
      </S.LeftContainer>
      <S.RightContainer>
        <SearchField />
        <S.BellWrapper>
          <S.Bell onClick={handleBellClick}>
            {isBellOpen ? <ActiveBell width="24" height="24" /> : <InactiveBell width="24" height="24" />}
          </S.Bell>
          {isBellOpen && (
            <S.NotificationWrapper ref={notificationRef}>
              <Notification />
            </S.NotificationWrapper>
          )}
        </S.BellWrapper>
        {/* {isLoggedIn ? (
          <S.LoggedInUl>
            <li>
              <Star width="24" height="24" />
            </li>
            <li>
              <Inventory width="24" height="24" />
            </li>
            <li>
              <S.BellWrapper>
                <S.Bell onClick={handleBellClick}>
                  {isBellOpen ? <ActiveBell width="24" height="24" /> : <InactiveBell width="24" height="24" />}
                </S.Bell>
                {isBellOpen && (
                  <S.NotificationWrapper ref={notificationRef}>
                    <Notification />
                  </S.NotificationWrapper>
                )}
              </S.BellWrapper>
            </li>
            <li>
              <S.Profile>
                <img src="https://placehold.co/100x100" alt="profile image" />
              </S.Profile>
            </li>
          </S.LoggedInUl>
        ) : (
          <S.NotLoggedInUl>
            <li>
              <S.BellWrapper>
                <S.Bell onClick={handleBellClick}>
                  {isBellOpen ? <ActiveBell width="24" height="24" /> : <InactiveBell width="24" height="24" />}
                </S.Bell>
                {isBellOpen && (
                  <S.NotificationWrapper ref={notificationRef}>
                    <Notification />
                  </S.NotificationWrapper>
                )}
              </S.BellWrapper>
            </li>
            <li>
              <S.LogIn to={PATH.AUTH.LOGIN}>로그인</S.LogIn>
            </li>
            <li>
              <S.SignUp to={PATH.AUTH.SIGNUP}>회원가입</S.SignUp>
            </li>
          </S.NotLoggedInUl>
        )} */}
      </S.RightContainer>
    </S.Container>
  );
};

export default Gnb;
