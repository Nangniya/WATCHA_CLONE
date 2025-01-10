import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';
import { Link } from 'react-router';
import { resetButtonStyle } from '@/styles/common';

export const MainTvCarouselContainer = styled.section`
  position: relative;
  &:hover button {
    opacity: 1;
  }
`;

export const ProgressBar = styled.div<{ $isTransitioning?: boolean }>`
  width: 100%;
  height: 3px;
  background-color: ${COLORS.gray[10]};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: ${COLORS.gray[60]};
    animation: progress 4s linear;
    animation-play-state: ${({ $isTransitioning }) => ($isTransitioning ? 'paused' : 'running')};
  }

  @keyframes progress {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

export const ArrowWrapper = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  width: 40px;
  color: ${COLORS.gray[90]};
  opacity: 0;
  transition: opacity 0.2s ease;
  ${resetButtonStyle};
  z-index: 10;

  &:hover {
    color: ${COLORS.base.white};
    transition: color 0.2s ease;
  }

  &.left {
    left: 40px;
    svg {
      transform: rotate(180deg);
    }
  }

  &.right {
    right: 40px;
  }
`;

export const UlWrapper = styled.div`
  overflow: hidden;
`;

export const SlideUl = styled.ul<{
  $currentSlide: number;
  $isTransitioning: boolean;
}>`
  display: flex;
  transform: translateX(${({ $currentSlide }) => -$currentSlide * 100}dvw);
  transition: ${({ $isTransitioning }) => ($isTransitioning ? 'transform 1s ease-in-out' : 'none')};
`;

export const SlideLi = styled.li<{ $width: string }>`
  position: relative;
  flex-shrink: 0;
  width: ${({ $width }) => `${$width}`};
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

export const Title = styled.h3`
  ${getFontStyle('display', 'large')};
`;
