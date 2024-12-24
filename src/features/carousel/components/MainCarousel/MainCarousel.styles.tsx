import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';
import { Link } from 'react-router-dom';

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

export const ArrowWrapper = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  width: 40px;
  background: 0 0;
  border: 0;
  outline: none;
  color: ${COLORS.gray[90]};
  opacity: 0;
  transition: opacity 0.2s ease;
  cursor: pointer;

  &.left {
    left: 0;
    svg {
      transform: rotate(180deg);
    }
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
  transition: ${({ $isTransitioning }) => ($isTransitioning ? 'transform 1s ease-in-out' : 'none')};
`;

export const SlideLi = styled.li`
  position: relative;
  flex-shrink: 0;
  width: 980px;
  border-radius: 8px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50%;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8));
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  right: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1;
  color: ${COLORS.base.white};
`;

export const Title = styled.h2`
  ${getFontStyle('display', 'large')};
`;

export const Description = styled.p`
  ${getFontStyle('body', 'medium')};
`;
