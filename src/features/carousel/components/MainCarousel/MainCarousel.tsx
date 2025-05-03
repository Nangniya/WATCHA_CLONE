import InfiniteSlide from 'react-infinite-carousel-component';
import Arrow from '@/assets/icons/arrow.svg';
import { IProps } from './MainCarousel.types';
import 'react-infinite-carousel-component/style.css';
import * as S from './MainCarousel.styles';

const MainCarousel = ({ data }: IProps) => {
  const settings = {
    gap: 20,
    leftArrow: (
      <S.ArrowWrapper className="left">
        <Arrow width="10" height="40" />
      </S.ArrowWrapper>
    ),
    rightArrow: (
      <S.ArrowWrapper>
        <Arrow width="10" height="40" />
      </S.ArrowWrapper>
    ),
  };
  return (
    <InfiniteSlide {...settings}>
      {data?.map(({ id, title, overview, backdropPath }, index) => (
        <S.MovieLink key={`main-${id}-${index}`} to={`/content/${id}`}>
          <S.Image src={`${process.env.IMAGE_URL}/original${backdropPath}`} alt={`${title} image`} />
          <S.ContentWrapper>
            <S.Title>{title}</S.Title>
            <S.Description>{overview}</S.Description>
          </S.ContentWrapper>
        </S.MovieLink>
      ))}
    </InfiniteSlide>
  );
};

export default MainCarousel;
