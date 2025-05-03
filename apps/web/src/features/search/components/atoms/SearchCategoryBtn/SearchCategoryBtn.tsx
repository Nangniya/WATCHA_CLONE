import * as S from './SearchCategoryBtn.styles';
import { IProps } from './SearchCategoryBtn.types';

const SearchCategoryBtn = ({ text, isActive, onClick }: IProps) => {
  return (
    <S.Button $isActive={isActive} onClick={onClick}>
      {text}
    </S.Button>
  );
};

export default SearchCategoryBtn;
