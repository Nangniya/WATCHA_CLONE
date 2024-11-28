import { Outlet } from 'react-router';
import Gnb from '../../organisms/Gnb/Gnb';

const Layout = () => {
  return (
    <>
      <Gnb />
      <Outlet />
    </>
  );
};

export default Layout;
