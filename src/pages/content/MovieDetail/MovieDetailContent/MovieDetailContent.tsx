import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useMovieCredit, useMovieDetail, useMovieVideo } from '@/queries/movie';
import NavLink from '@/components/atoms/NavLink/NavLink';
import Play from '@/assets/icons/play.svg';
import Plus from '@/assets/icons/plus.svg';
import Kebab from '@/assets/icons/kebab.svg';
import { formatRuntime, getReleasedYear } from '@/utils/formatters';
import { TDetailTab } from './MovieDetailContent.types';
import * as S from './MovieDetailContent.styles';
import Person from '@/components/molecules/Person/Person';

const MovieDetailContent = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') as TDetailTab | null;

  const { data: DETAIL, error: detailError } = useMovieDetail(Number(movieId));
  const { data: VIDEO, error: videoError } = useMovieVideo(Number(movieId));
  const { data: CREDIT, error: castError } = useMovieCredit(Number(movieId));

  if (detailError != null) throw new Error('상세 정보를 가져오는 중 문제 발생');
  if (videoError != null) throw new Error('비디오 정보를 가져오는 중 문제 발생');
  if (castError != null) throw new Error('출연진 정보를 가져오는 중 문제 발생');

  useEffect(() => {
    if (!currentTab) setSearchParams({ tab: 'content' });
  }, []);

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
        <S.Video to={`/watch/${VIDEO.results[0].key}`}>
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
        <NavLink to="?tab=content" text="콘텐츠 정보" />
      </S.TabContainer>
      <S.CastContainer>
        <S.CastTitleContainer>
          <S.H2>출연/제작</S.H2>
          <S.More to={`/content/${movieId}/credits`}>더보기</S.More>
        </S.CastTitleContainer>
        <S.Grid>
          {[...CREDIT.cast, ...CREDIT.crew].slice(0, 9).map(({ id, name, profilePath, knownForDepartment }) => (
            <Person
              key={`person-${id}`}
              id={id}
              name={name}
              profilePath={profilePath}
              knownForDepartment={knownForDepartment}
            />
          ))}
        </S.Grid>
      </S.CastContainer>
    </S.Container>
  );
};

export default MovieDetailContent;
