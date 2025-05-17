import { Link, useParams } from 'react-router';
import { usePersonDetail, usePersonMovies } from '@/queries/people';
import * as S from './PersonWorks.styles';

const PersonWorks = () => {
  const { personId } = useParams<{ personId: string }>();
  const { data: MOVIES } = usePersonMovies(Number(personId));
  const { data: DETAIL } = usePersonDetail(Number(personId));

  const DATA = [...(MOVIES?.cast || []), ...(MOVIES?.crew || [])];

  return (
    <S.Container>
      <S.H1>{DETAIL?.name}</S.H1>
      <S.Ul>
        {DATA.map(({ id, posterPath }) => (
          <S.Li key={`person-movies-${id}`}>
            <Link to={`/content/${id}`}>
              <img src={`${process.env.IMAGE_URL}/original/${posterPath}`} alt={`poster-${id}`} />
            </Link>
          </S.Li>
        ))}
      </S.Ul>
    </S.Container>
  );
};

export default PersonWorks;
