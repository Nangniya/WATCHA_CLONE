import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';
import { CarouselType } from './CategoryCarousel.types';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  color: ${COLORS.base.white};

  &:hover button {
    opacity: 1;
  }
`;

export const Category = styled.h2`
  ${getFontStyle('title', 'medium')};
`;

export const SlideContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

export const ArrowWrapper = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(calc(-50% + 13px));
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
  $transform: number;
  $isTransitioning: boolean;
  $gap: number;
}>`
  position: relative;
  display: flex;
  gap: ${({ $gap }) => `${$gap}px`};
  width: 100%;
  transform: translateX(${({ $transform }) => `${$transform}px`});
  transition: ${({ $isTransitioning }) => ($isTransitioning ? 'transform 0.8s ease-in-out' : 'none')};
`;

export const SlideLi = styled.li<{ $width: number }>`
  position: relative;
  flex-shrink: 0;
  width: ${({ $width }) => `${$width}px`};
  cursor: pointer;
`;

export const Image = styled.img<{ $type: CarouselType }>`
  position: relative; // 쌓임 맥락 만들기 위함
  width: 100%;
  padding-left: ${({ $type }) => $type === 'ranking' && '50px'};
  object-fit: cover;
  border-radius: 4px;
  z-index: 2;
`;

export const RankNumber = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  ${getFontStyle('display', 'large')};
  z-index: 1;
`;

export const ContentTitle = styled.p`
  position: absolute;
  ${getFontStyle('body', 'small')};
  color: ${COLORS.base.white};
`;
