import { Link } from 'react-router';
import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@nangniya/ui';
import { CarouselType } from './CategoryCarousel.types';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  color: ${COLORS.base.white};
`;

export const Category = styled.h2`
  padding: 0 40px;
  ${getFontStyle('title', 'medium')};
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  color: ${COLORS.gray[90]};
  &.left {
    transform: rotate(180deg);
  }
`;

export const MovieLink = styled(Link)<{ $width: number; $type: CarouselType }>`
  position: relative;
  display: flex;
  width: ${({ $width }) => `${$width}px`};
  height: 100%;
  padding-left: ${({ $type }) => $type === 'ranking' && '50px'};
  text-decoration: none;
  color: inherit;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 4px;
`;

export const RankNumber = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  ${getFontStyle('display', 'large')};
`;

export const ContentTitle = styled.p`
  position: absolute;
  bottom: 0;
  padding: 10px;
  ${getFontStyle('body', 'small')};
  color: ${COLORS.base.white};
`;
