import Arrow from '@/assets/icons/arrow.svg';
import { usePopularTvs } from '@/queries/tv';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './PopularContent.styles';

const PopularContent = () => {
  const { data: POPULARTV } = usePopularTvs();

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const timerRef = useRef<NodeJS.Timeout>();

  const handleSlideChange = useCallback(
    (direction: 'next' | 'prev') => {
      if (!POPULARTV || isTransitioning) return;

      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + (direction === 'next' ? 1 : -1));
    },
    [isTransitioning, POPULARTV],
  );

  const handleTransitionEnd = () => {
    if (!POPULARTV) return;

    setIsTransitioning(false);
    if (currentSlide >= POPULARTV.results.length + 1) setCurrentSlide(1);
    if (currentSlide <= 0) setCurrentSlide(POPULARTV.results.length);
  };

  const DATA = POPULARTV.results
    ? [POPULARTV.results[POPULARTV.results.length - 1], ...POPULARTV.results, POPULARTV.results[0]]
    : [];

  useEffect(() => {
    if (!isTransitioning) {
      timerRef.current = setTimeout(() => {
        handleSlideChange('next');
      }, 4000);
    }

    return () => clearTimeout(timerRef.current);
  }, [isTransitioning, POPULARTV]);

  return (
    <S.MainTvCarouselContainer>
      <S.ProgressBar key={currentSlide} $isTransitioning={isTransitioning} />
      <S.ArrowWrapper className="left" onClick={() => handleSlideChange('prev')}>
        <Arrow width="10" height="40" />
      </S.ArrowWrapper>
      <S.UlWrapper>
        <S.SlideUl
          $currentSlide={currentSlide}
          $isTransitioning={isTransitioning}
          onTransitionEnd={handleTransitionEnd}
        >
          {DATA.map(({ id, originalName, backdropPath }, index) => (
            <S.SlideLi key={`main-tv-${id}-${index}`} $width={'100dvw'}>
              <S.MovieLink to={`/content/${id}`}>
                <S.Image src={`${process.env.IMAGE_URL}/original${backdropPath}`} alt={`${originalName} image`} />
                <S.ContentWrapper>
                  <S.Title>{originalName}</S.Title>
                </S.ContentWrapper>
              </S.MovieLink>
            </S.SlideLi>
          ))}
        </S.SlideUl>
      </S.UlWrapper>
      <S.ArrowWrapper className="right" onClick={() => handleSlideChange('next')}>
        <Arrow width="10" height="40" />
      </S.ArrowWrapper>
    </S.MainTvCarouselContainer>
  );
};

export default PopularContent;
