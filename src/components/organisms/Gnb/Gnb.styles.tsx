import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { getFontStyle } from '../../../styles/typography';
import { COLORS } from '../../../styles/colors';

export const Container = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100dvw;
  height: 72px;
`;

export const Category = styled(Link)`
  ${getFontStyle('title', 'medium')};
  color: ${COLORS.gray[60]};
  text-decoration: none;
`;
