import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';

export const CarouselWrapper = styled.section`
  position: relative;
  padding: 0 40px;

  &:hover button {
    opacity: 1;
  }
`;

export const MainCarousel = styled.div`
  overflow: hidden;
`;

export const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: ${COLORS.base.white};
  opacity: 0;
  z-index: 10;
  transition: opacity 0.2s ease;
  cursor: pointer;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`;

export const SlideUl = styled.ul<{
  $currentSlide: number;
  $isTransitioning: boolean;
}>`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 12px 0;
  transform: ${({ $currentSlide }) => `translateX(${-1000 * $currentSlide}px)`};
  transition: ${({ $isTransitioning }) => ($isTransitioning ? 'transform 0.7s ease-in-out' : 'none')};
`;

export const SlideLi = styled.li`
  flex-shrink: 0;
  width: 980px;
`;

export const Image = styled.img`
  width: 100%;
`;
