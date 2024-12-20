import { IProps } from './Tab.types';
import * as S from './Tab.styles';

const Tab = ({ text, isActive, onClick }: IProps) => {
  return (
    <li>
      <S.Button $isActive={isActive} onClick={onClick}>
        {text}
      </S.Button>
    </li>
  );
};

export default Tab;
