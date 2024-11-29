import { Outlet } from 'react-router';
import Gnb from '../../organisms/Gnb/Gnb';
import Fnb from '../../organisms/Fnb/Fnb';

const Layout = () => {
  return (
    <>
      <Gnb />
      <Outlet />
      <Fnb />
    </>
  );
};

export default Layout;
