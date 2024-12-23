import { useState } from 'react';
import { Direction, IProps } from './MainCarousel.types';
import * as S from './MainCarousel.styles';

const MainCarousel = ({ data }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransitionEnd = () => {
    if (!data) return;

    setIsTransitioning(false);
    if (currentSlide >= 11) setCurrentSlide(1);
    if (currentSlide <= 0) setCurrentSlide(10);
  };

  const handleSlideChange = (direction: Direction) => () => {
    if (!data || isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + (direction === 'next' ? 1 : -1));
  };

  if (!data) return null;

  const DATA = [data[9], ...data.slice(0, 10), data[0]];

  return (
    <S.CarouselWrapper>
      <S.Arrow className="left" onClick={handleSlideChange('prev')}>
        왼
      </S.Arrow>
      <S.MainCarousel>
        <S.SlideUl
          $currentSlide={currentSlide}
          $isTransitioning={isTransitioning}
          onTransitionEnd={handleTransitionEnd}
        >
          {DATA.map((movie) => (
            <S.SlideLi key={movie.id}>
              <S.Image src={`${process.env.IMAGE_URL}/original${movie.backdrop_path}`} alt={`${movie.title} image`} />
            </S.SlideLi>
          ))}
        </S.SlideUl>
      </S.MainCarousel>
      <S.Arrow className="right" onClick={handleSlideChange('next')}>
        오
      </S.Arrow>
    </S.CarouselWrapper>
  );
};

export default MainCarousel;
