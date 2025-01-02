import { useParams } from 'react-router-dom';
import Person from '@/components/molecules/Person/Person';
import { useMovieCredit } from '@/queries/movie';
import * as S from './MovieCredits.styles';

const MovieCredits = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const { data: CREDIT, error } = useMovieCredit(Number(movieId));

  if (error != null) throw new Error('출연진 정보를 가져오는 중 문제 발생');

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
