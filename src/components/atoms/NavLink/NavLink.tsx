import { useLocation } from 'react-router-dom';
import * as S from './NavLink.styles';

interface IProps {
  to: string;
  text: string;
}

const NavLink = ({ to, text }: IProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <S.Container to={to} $isActive={isActive}>
      {text}
    </S.Container>
  );
};

export default NavLink;
