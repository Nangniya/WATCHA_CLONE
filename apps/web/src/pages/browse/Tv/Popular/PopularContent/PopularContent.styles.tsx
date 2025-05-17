import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@nangniya/ui';
import { Link } from 'react-router';

export const ArrowWrapper = styled.div`
  width: 40px;
  color: ${COLORS.gray[90]};
  svg {
    &:hover {
      color: ${COLORS.base.white};
    }
  }
  &.left {
    transform: rotate(180deg);
    margin-left: 40px;
  }
  &.right {
    margin-right: 40px;
  }
`;

export const MovieLink = styled(Link)`
  position: relative;
  display: flex;
  width: 100dvw;
  height: 100%;
  text-decoration: none;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 30%, rgba(0, 0, 0, 0.8));
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.h3`
  position: absolute;
  bottom: 40px;
  left: 40px;
  display: flex;
  z-index: 1;
  ${getFontStyle('display', 'large')};
  color: ${COLORS.base.white};
`;
