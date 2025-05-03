import InfiniteSlide from 'react-infinite-carousel-component';
import Arrow from '@/assets/icons/arrow.svg';
import { IProps } from './CategoryCarousel.types';
import 'react-infinite-carousel-component/style.css';
import * as S from './CategoryCarousel.styles';

const CategoryCarousel = ({ type = 'normal', category, data }: IProps) => {
  const ITEM_WIDTH = type === 'ranking' ? 326 : 290;

  const settings = {
    gap: 5,
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
    responsive: [
      { breakpoint: 1025, slidesToScroll: 2 },
      { breakpoint: 1280, slidesToScroll: 3 },
      { breakpoint: 1500, slidesToScroll: 4 },
    ],
  };

  return (
    <S.Container>
      <S.Category>{category}</S.Category>
      <InfiniteSlide {...settings}>
        {data?.map(({ id, backdropPath, title }, index) => (
          <S.MovieLink key={`slide-${id}-${index}`} to={`/content/${id}`} $width={ITEM_WIDTH} $type={type}>
            {type === 'ranking' && <S.RankNumber>{index + 1}</S.RankNumber>}
            <S.Image src={`${process.env.IMAGE_URL}/w500${backdropPath}`} alt={title} />
            <S.ContentTitle>{title}</S.ContentTitle>
          </S.MovieLink>
        ))}
      </InfiniteSlide>
    </S.Container>
  );
};

export default CategoryCarousel;
