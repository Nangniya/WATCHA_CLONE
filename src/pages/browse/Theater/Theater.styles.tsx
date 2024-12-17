import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';

export const Container = styled.div`
  padding: 0 40px 32px 40px;
  background-color: ${COLORS.base.black};
`;

export const TabContainer = styled.section`
  margin: 24px 0;
`;

export const TabUl = styled.ul`
  display: flex;
  gap: 8px;
`;
