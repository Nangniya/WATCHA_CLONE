import { Outlet } from 'react-router';
import Gnb from '@/components/organisms/Gnb/Gnb';
import Fnb from '@/components/organisms/Fnb/Fnb';
import * as S from './Layout.styles';

const Layout = () => {
  return (
    <S.OuterWrapper>
      <Gnb />
      <S.InnerWrapper>
        <Outlet />
        <Fnb />
      </S.InnerWrapper>
    </S.OuterWrapper>
  );
};

export default Layout;
