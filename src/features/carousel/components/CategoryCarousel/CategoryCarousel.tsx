import { useEffect, useMemo, useRef, useState } from 'react';
import Arrow from '@/assets/icons/arrow.svg';
import { IProps } from './CategoryCarousel.types';
import * as S from './CategoryCarousel.styles';

const CategoryCarousel = ({ type = 'normal', category, data }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleSlidesNumber, setVisibleSlidesNumber] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const ITEM_WIDTH = type === 'ranking' ? 326 : 290;
  const ITEM_GAP = 5;

  const DATA = useMemo(() => {
    if (!data || !visibleSlidesNumber) return [];

    const prefix = data.slice(-visibleSlidesNumber);
    const suffix = data.slice(0, visibleSlidesNumber + 1);

    return [...prefix, ...data, ...suffix];
  }, [data, visibleSlidesNumber]);

  const handleNextSlide = () => {
    if (!data || isTransitioning) return;

    setIsTransitioning(true);

    if (currentIndex === data.length) {
      setCurrentIndex(visibleSlidesNumber + data.length);
      return;
    }

    const nextIndex = currentIndex + visibleSlidesNumber;
    setCurrentIndex(nextIndex >= data.length ? data.length : nextIndex);
  };

  const handlePrevSlide = () => {
    if (!data || isTransitioning) return;

    setIsTransitioning(true);

    if (currentIndex === visibleSlidesNumber) {
      setCurrentIndex(0);
      return;
    }

    const prevIndex = currentIndex - visibleSlidesNumber;
    setCurrentIndex(prevIndex <= visibleSlidesNumber ? visibleSlidesNumber : prevIndex);
  };

  const handleTransitionEnd = () => {
    if (!data) return;

    setIsTransitioning(false);
    if (currentIndex >= visibleSlidesNumber + data.length) setCurrentIndex(visibleSlidesNumber);
    if (currentIndex <= 0) setCurrentIndex(data.length);
  };

  const calculateRankNumber = (index: number) => {
    if (!data) return 0;

    // 앞에 visibleSlidesNumber만큼 복제된 슬라이드
    if (index < visibleSlidesNumber) {
      return data.length - visibleSlidesNumber + index + 1;
    }
    // 중간의 실제 데이터
    if (index < visibleSlidesNumber + data.length) {
      return index - visibleSlidesNumber + 1;
    }
    // 뒤에 복제된 슬라이드
    return index - (visibleSlidesNumber + data.length) + 1;
  };

  // viewport에 잘리지 않고 온전히 들어갈 수 있는 슬라이드 개수 계산
  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const visibleSlides = Math.floor(containerWidth / (ITEM_WIDTH + ITEM_GAP));
    setVisibleSlidesNumber(visibleSlides);
  }, []);

  useEffect(() => {
    if (visibleSlidesNumber) setCurrentIndex(visibleSlidesNumber);
  }, [visibleSlidesNumber]);

  return (
    <S.Container>
      <S.Category>{category}</S.Category>
      <S.ArrowWrapper className="left" onClick={handlePrevSlide}>
        <Arrow width="10" height="40" />
      </S.ArrowWrapper>
      <S.SlideContainer ref={containerRef}>
        <S.SlideUl
          $transform={-(currentIndex * (ITEM_WIDTH + ITEM_GAP))}
          $isTransitioning={isTransitioning}
          $gap={ITEM_GAP}
          onTransitionEnd={handleTransitionEnd}
        >
          {DATA.map((movie, index) => (
            <S.SlideLi key={`slide-${movie.id}-${index}`} $width={ITEM_WIDTH}>
              {type === 'ranking' && <S.RankNumber>{calculateRankNumber(index)}</S.RankNumber>}
              <S.Image src={`${process.env.IMAGE_URL}/w500${movie.backdrop_path}`} alt={movie.title} $type={type} />
              <S.ContentTitle>{movie.title}</S.ContentTitle>
            </S.SlideLi>
          ))}
        </S.SlideUl>
      </S.SlideContainer>
      <S.ArrowWrapper className="right" onClick={handleNextSlide}>
        <Arrow width="10" height="40" />
      </S.ArrowWrapper>
    </S.Container>
  );
};

export default CategoryCarousel;
