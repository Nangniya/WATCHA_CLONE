import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 24px;
  padding-bottom: 32px;
`;

export const TabContainer = styled.section`
  padding: 0 40px;
`;

export const TabUl = styled.ul`
  display: flex;
  gap: 10px;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  padding: 0 40px;

  &:hover button {
    opacity: 1;
  }
`;

export const MainCarousel = styled.section`
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

export const SlideUl = styled.ul`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 12px 0;
`;

export const SlideLi = styled.li`
  flex-shrink: 0;
  width: 980px;
`;

export const Image = styled.img`
  width: 100%;
`;
