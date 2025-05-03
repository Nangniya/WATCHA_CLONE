import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@nangniya/ui';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const H1 = styled.h1`
  padding-bottom: 12px;
  ${getFontStyle('headline', 'medium')};
  color: ${COLORS.base.white};
  border-bottom: 0.2px solid ${COLORS.gray[10]};
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;
