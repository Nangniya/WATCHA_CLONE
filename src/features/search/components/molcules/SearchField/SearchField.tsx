import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '@/assets/icons/search.svg';
import X from '@/assets/icons/clear.svg';
import { PATH } from '@/constants/path';
import * as S from './SearchField.styles';
import { useSearchQuery } from '@/features/search/hooks/useSearchQuery';
import { useDebounce } from '@/hooks/useDebounce';

const SearchField = () => {
  const { query, setSearchQuery } = useSearchQuery();
  const [value, setValue] = useState(query);
  const navigate = useNavigate();

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleSearchClick = () => navigate(PATH.SEARCH);
  const handleClearBtnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setValue('');
  };

  useDebounce(value, setSearchQuery);

  return (
    <S.Form>
      <S.Label onClick={handleSearchClick}>
        <Search width="20" height="20" />
        <S.Input value={value} onChange={handleValueChange} placeholder="콘텐츠, 태그, 인물, 리스트 검색" />
        {value?.length > 0 && (
          <S.ClearBtn onClick={handleClearBtnClick}>
            <X width="20" height="20" />
          </S.ClearBtn>
        )}
      </S.Label>
    </S.Form>
  );
};

export default SearchField;