import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Tab from '@/components/atoms/Tab/Tab';
import { getPopularMovies } from '@/services/movie';
import * as S from './Movie.styles';

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentTab = searchParams.get('tab');

  const { data } = useQuery({
    queryKey: ['movie', 'popular', 'main'],
    queryFn: getPopularMovies,
  });

  const handleTransitionEnd = () => {
    if (!data) return;

    if (currentSlide >= 11) {
      setIsTransitioning(false);
      setCurrentSlide(1);
    } else if (currentSlide <= 0) {
      setIsTransitioning(false);
      setCurrentSlide(10);
    } else {
      setIsTransitioning(false);
    }
  };

  const handlePrevSlide = () => {
    if (!data || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  const handleNextSlide = () => {
    if (!data || isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  useEffect(() => {
    if (!currentTab) setSearchParams({ tab: 'popular' });
  }, []);

  if (!data || !data.results) return null;

  const DATA = [data?.results[9], ...data.results.slice(0, 10), data?.results[0]];

  return (
    <S.Container>
      <S.TabContainer>
        <S.TabUl>
          <Tab text="인기" isActive={currentTab === 'popular'} onClick={() => {}} />
          <Tab text="현재 상영중" isActive={currentTab === 'now_playing'} onClick={() => {}} />
          <Tab text="높은 평점" isActive={currentTab === 'top_rated'} onClick={() => {}} />
          <Tab text="개봉 박두" isActive={currentTab === 'upcoming'} onClick={() => {}} />
        </S.TabUl>
      </S.TabContainer>
      {/* 현재는 인기(Popular)만 구현 -> 추후 탭에 따라 다르게 렌더링 예정 */}
      <S.CarouselWrapper>
        <S.Arrow className="left" onClick={handlePrevSlide}>
          왼
        </S.Arrow>
        <S.MainCarousel>
          <S.SlideUl
            style={{
              transform: `translateX(${-1000 * currentSlide}px)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {DATA.map((movie) => (
              <S.SlideLi key={movie.id}>
                <S.Image src={`${process.env.IMAGE_URL}/original${movie.backdrop_path}`} alt={`${movie.title} image`} />
              </S.SlideLi>
            ))}
          </S.SlideUl>
        </S.MainCarousel>
        <S.Arrow className="right" onClick={handleNextSlide}>
          오
        </S.Arrow>
      </S.CarouselWrapper>
      {currentSlide}
    </S.Container>
  );
};

export default Movie;
