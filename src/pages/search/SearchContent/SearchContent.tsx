import { useState } from 'react';
import SearchCategoryBtn from '@/features/search/components/atoms/SearchCategoryBtn/SearchCategoryBtn';
import { useSearch } from '@/queries/search';
import { IProps } from './SearchContent.types';
import * as S from './SearchContent.styles';

const SearchContent = ({ query }: IProps) => {
  if (!query.trim()) return <S.EmptyQuery>검색어를 입력해주세요</S.EmptyQuery>;

  const [domain, setDomain] = useState<'movie' | 'tv' | 'person'>('movie');
  const { data: SEARCHEDRESULT } = useSearch(query);

  if (SEARCHEDRESULT.results.length === 0) return <S.EmptyQuery>검색 결과가 없습니다.</S.EmptyQuery>;

  const MOVIEDATA = SEARCHEDRESULT.results.filter((item) => item.mediaType === 'movie');
  const TVDATA = SEARCHEDRESULT.results.filter((item) => item.mediaType === 'tv');
  const PERSONDATA = SEARCHEDRESULT.results.filter((item) => item.mediaType === 'person');

  return (
    <S.Container>
      <S.TabContainer>
        {MOVIEDATA.length > 0 && (
          <SearchCategoryBtn onClick={() => setDomain('movie')} isActive={domain === 'movie'} text="영화" />
        )}
        {TVDATA.length > 0 && (
          <SearchCategoryBtn onClick={() => setDomain('tv')} isActive={domain === 'tv'} text="TV" />
        )}
        {PERSONDATA.length > 0 && (
          <SearchCategoryBtn onClick={() => setDomain('person')} isActive={domain === 'person'} text="인물" />
        )}
      </S.TabContainer>
      {domain === 'movie' && (
        <S.Grid>
          {MOVIEDATA.map(({ id, posterPath }) => (
            <S.MovieItem key={`search-movie-${id}`}>
              <img src={`${process.env.IMAGE_URL}/original${posterPath}`} alt={`${id}-image`} />
            </S.MovieItem>
          ))}
        </S.Grid>
      )}
      {domain === 'person' && (
        <S.Grid>
          {PERSONDATA.map(({ id, profilePath, name }) => (
            <S.PersonItem key={`search-person-${id}`}>
              <S.PersonImgWrapper>
                <img src={`${process.env.IMAGE_URL}/original${profilePath}`} alt={`${id}-image`} />
              </S.PersonImgWrapper>
              <S.PersonName>{name}</S.PersonName>
            </S.PersonItem>
          ))}
        </S.Grid>
      )}
    </S.Container>
  );
};

export default SearchContent;
