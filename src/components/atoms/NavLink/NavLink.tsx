import { IProps } from './NavLink.types';
import * as S from './NavLink.styles';

const NavLink = ({ text, isActive, ...props }: IProps) => {
  return (
    <S.Container {...props} $isActive={isActive}>
      {text}
    </S.Container>
  );
};

export default NavLink;
