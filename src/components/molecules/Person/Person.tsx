import { IMovieCreditData } from '@/services/movie/movie.types';
import * as S from './Person.styles';

const Person = ({ id, name, profilePath, knownForDepartment }: IMovieCreditData) => {
  return (
    <S.Container>
      <S.PersonLink to={`/people/${id}`}>
        <S.ImgContainer>
          <img src={`${process.env.IMAGE_URL}/original${profilePath}`} alt={`${name} image`} />
        </S.ImgContainer>
        <S.CastInfo>
          <S.CastName>{name}</S.CastName>
          <S.CastPosition>{knownForDepartment}</S.CastPosition>
        </S.CastInfo>
      </S.PersonLink>
    </S.Container>
  );
};

export default Person;
