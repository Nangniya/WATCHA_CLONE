import { useState } from 'react';
import Arrow from '@/assets/icons/arrow.svg';
import { Direction, IProps } from './MainCarousel.types';
import * as S from './MainCarousel.styles';

const MainCarousel = ({ data }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransitionEnd = () => {
    if (!data) return;

    setIsTransitioning(false);
    if (currentSlide >= data.length + 1) setCurrentSlide(1);
    if (currentSlide <= 0) setCurrentSlide(data.length);
  };

  const handleSlideChange = (direction: Direction) => () => {
    if (!data || isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + (direction === 'next' ? 1 : -1));
  };

  const DATA = data ? [data[data.length - 1], ...data, data[0]] : [];

  return (
    <S.CarouselWrapper>
      <S.ArrowWrapper className="left" onClick={handleSlideChange('prev')}>
        <Arrow width="10" height="40" />
      </S.ArrowWrapper>
      <S.MainCarousel>
        <S.SlideUl
          $currentSlide={currentSlide}
          $isTransitioning={isTransitioning}
          $gap={20}
          $transform={-1000 * currentSlide}
          onTransitionEnd={handleTransitionEnd}
        >
          {DATA.map(({ id, title, overview, backdropPath }, index) => (
            <S.SlideLi key={`main-${id}-${index}`} $width={980}>
              <S.MovieLink to={`/content/${id}`}>
                <S.Image src={`${process.env.IMAGE_URL}/original${backdropPath}`} alt={`${title} image`} />
                <S.ContentWrapper>
                  <S.Title>{title}</S.Title>
                  <S.Description>{overview}</S.Description>
                </S.ContentWrapper>
              </S.MovieLink>
            </S.SlideLi>
          ))}
        </S.SlideUl>
      </S.MainCarousel>
      <S.ArrowWrapper className="right" onClick={handleSlideChange('next')}>
        <Arrow width="10" height="40" />
      </S.ArrowWrapper>
    </S.CarouselWrapper>
  );
};

export default MainCarousel;
