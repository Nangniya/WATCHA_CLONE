import { useLocation } from 'react-router-dom';
import { IProps } from './NavLink.types';
import * as S from './NavLink.styles';

const NavLink = ({ text, ...props }: IProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === props.to;

  return (
    <S.Container {...props} $isActive={isActive}>
      {text}
    </S.Container>
  );
};

export default NavLink;
