import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 12px 40px;
`;

export const SkeletonContainer = styled.section`
  display: flex;
  gap: 10px;
  padding: 0 40px;
  overflow: hidden;
`;