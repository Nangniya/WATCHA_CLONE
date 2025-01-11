import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';

export const Container = styled.div`
  padding: 40px;
  ${getFontStyle('body', 'large')};
  color: ${COLORS.base.white};
`;
