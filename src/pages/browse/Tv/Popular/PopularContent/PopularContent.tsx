import Arrow from '@/assets/icons/arrow.svg';
import { usePopularTvs } from '@/queries/tv';
import * as S from './PopularContent.styles';
import { useState } from 'react';

const PopularContent = () => {
  const { data: POPULARTV } = usePopularTvs();

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSlideChange = (direction: 'next' | 'prev') => () => {
    if (!POPULARTV || isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + (direction === 'next' ? 1 : -1));
  };

  const handleTransitionEnd = () => {
    if (!POPULARTV) return;

    setIsTransitioning(false);
    if (currentSlide >= POPULARTV.results.length + 1) setCurrentSlide(1);
    if (currentSlide <= 0) setCurrentSlide(POPULARTV.results.length);
  };

  const DATA = POPULARTV.results
    ? [POPULARTV.results[POPULARTV.results.length - 1], ...POPULARTV.results, POPULARTV.results[0]]
    : [];

  return (
    <S.MainTvCarouselContainer>
      <S.ArrowWrapper className="left" onClick={handleSlideChange('prev')}>
        <Arrow width="10" height="40" />
      </S.ArrowWrapper>
      <S.UlWrapper>
        <S.SlideUl
          $currentSlide={currentSlide}
          $isTransitioning={isTransitioning}
          onTransitionEnd={handleTransitionEnd}
        >
          {DATA.map(({ id, title, backdropPath }, index) => (
            <S.SlideLi key={`main-tv-${id}-${index}`} $width={'100dvw'}>
              <S.MovieLink to={`/content/${id}`}>
                <S.Image src={`${process.env.IMAGE_URL}/original${backdropPath}`} alt={`${title} image`} />
                <S.ContentWrapper>
                  <S.Title>{title}</S.Title>
                </S.ContentWrapper>
              </S.MovieLink>
            </S.SlideLi>
          ))}
        </S.SlideUl>
      </S.UlWrapper>
      <S.ArrowWrapper className="right" onClick={handleSlideChange('next')}>
        <Arrow width="10" height="40" />
      </S.ArrowWrapper>
    </S.MainTvCarouselContainer>
  );
};

export default PopularContent;
