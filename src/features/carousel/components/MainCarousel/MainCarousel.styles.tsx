import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';
import { Link } from 'react-router';

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

export const MovieLink = styled(Link)`
  position: relative;
  display: flex;
  width: 980px;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
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

export const Description = styled.p`
  ${getFontStyle('body', 'medium')};
`;
