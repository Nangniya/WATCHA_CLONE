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
  position: relative;
  width: 100%;
  height: 3px;
  background-color: ${COLORS.gray[10]};

  &::before {
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
    inset: 0;
    background: linear-gradient(to bottom, transparent 30%, rgba(0, 0, 0, 0.8));
    z-index: 1;
  }
`;

export const MovieLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

export const Image = styled.img`
  width: 100%;
  z-index: 5;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

export const Title = styled.h3`
  ${getFontStyle('display', 'large')};
  color: ${COLORS.base.white};
`;
