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
