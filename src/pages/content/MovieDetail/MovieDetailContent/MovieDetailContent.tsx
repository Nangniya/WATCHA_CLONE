import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { useAllMovieDetail } from '@/queries/movie';
import NavLink from '@/components/atoms/NavLink/NavLink';
import Person from '@/components/molecules/Person/Person';
import Play from '@/assets/icons/play.svg';
import Plus from '@/assets/icons/plus.svg';
import Kebab from '@/assets/icons/kebab.svg';
import { formatRuntime, getReleasedYear } from '@/utils/formatters';
import { IProps, TDetailTab } from './MovieDetailContent.types';
import * as S from './MovieDetailContent.styles';

const MovieDetailContent = ({ movieId }: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') as TDetailTab | null;

  const [{ data: DETAIL }, { data: VIDEO }, { data: CREDIT }, { data: SIMILAR }] = useAllMovieDetail(movieId);

  useEffect(() => {
    if (!currentTab) setSearchParams({ tab: 'content' }, { replace: true });
  }, [movieId]);

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.MainInfoContainer>
          <S.Title>{DETAIL.title}</S.Title>
          <S.SubInfoContainer>
            <S.Age>{DETAIL.adult ? '19+' : '19↓'}</S.Age>·<S.Rate>{`평균 ${DETAIL.voteAverage.toFixed(1)}`}</S.Rate>·
            <span>{getReleasedYear(DETAIL.releaseDate)}</span>·<span>{formatRuntime(DETAIL.runtime)}</span> ·{' '}
            <span>{DETAIL.genres[0].name}</span>
          </S.SubInfoContainer>
          <S.Overview>{DETAIL.overview}</S.Overview>
        </S.MainInfoContainer>
        <S.BackDrop>
          <img src={`${process.env.IMAGE_URL}/w500/${DETAIL.backdropPath}`} alt={`${DETAIL.title} image`} />
        </S.BackDrop>
      </S.HeaderContainer>
      <S.AdditionalContainer>
        <S.Video
          to={VIDEO.results.length > 0 && VIDEO.results[0].site === 'YouTube' ? `/watch/${VIDEO.results[0].key}` : '#'}
          $disabled={VIDEO.results.length <= 0}
        >
          <Play width="20" height="20" /> 미리보기
        </S.Video>
        <S.RightOptions>
          <S.OptionContainer>
            <Plus width="24" height="24" />
            <p>보고싶어요</p>
          </S.OptionContainer>
          <S.OptionContainer>
            <Kebab width="24" height="24" />
            <p>더보기</p>
          </S.OptionContainer>
        </S.RightOptions>
      </S.AdditionalContainer>
      <S.TabContainer>
        <NavLink to="?tab=content" isActive={currentTab === 'content'} text="콘텐츠 정보" />
        <NavLink to="?tab=related" isActive={currentTab === 'related'} text="관련 콘텐츠" />
      </S.TabContainer>
      {currentTab === 'content' && (
        <S.CastContainer>
          <S.CastTitleContainer>
            <S.ContentTypeTitle>출연/제작</S.ContentTypeTitle>
            <S.More to={`/content/${movieId}/credits`}>더보기</S.More>
          </S.CastTitleContainer>
          <S.PeopleGrid>
            {[...CREDIT.cast, ...CREDIT.crew].slice(0, 9).map(({ id, name, profilePath, knownForDepartment }) => (
              <Person
                key={`person-${movieId}-${id}`}
                id={id}
                name={name}
                profilePath={profilePath}
                knownForDepartment={knownForDepartment}
              />
            ))}
          </S.PeopleGrid>
        </S.CastContainer>
      )}
      {currentTab === 'related' && (
        <S.RelatedContainer>
          <S.ContentTypeTitle>비슷한 콘텐츠</S.ContentTypeTitle>
          <S.SimilarGrid>
            {SIMILAR.results.map(({ id, title, posterPath }) => (
              <S.SimilarMovie key={`similar-${movieId}-${id}`}>
                <S.MovieLink to={`/content/${id}`} $isImgNull={!posterPath} $title={title}>
                  {posterPath && <img src={`${process.env.IMAGE_URL}/original/${posterPath}`} alt="포스터" />}
                </S.MovieLink>
              </S.SimilarMovie>
            ))}
          </S.SimilarGrid>
        </S.RelatedContainer>
      )}
    </S.Container>
  );
};

export default MovieDetailContent;
