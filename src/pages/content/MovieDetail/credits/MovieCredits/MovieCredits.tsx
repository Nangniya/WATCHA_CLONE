import { useParams } from 'react-router';
import Person from '@/components/molecules/Person/Person';
import { useMovieCredit } from '@/queries/movie';
import * as S from './MovieCredits.styles';

const MovieCredits = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const { data: CREDIT } = useMovieCredit(Number(movieId));

  return (
    <S.Container>
      <S.H1>출연/제작</S.H1>
      <S.Ul>
        {[...CREDIT.cast, ...CREDIT.crew].map(({ id, name, profilePath, knownForDepartment }) => (
          <Person
            key={`person-${id}`}
            id={id}
            name={name}
            profilePath={profilePath}
            knownForDepartment={knownForDepartment}
          />
        ))}
      </S.Ul>
    </S.Container>
  );
};

export default MovieCredits;
