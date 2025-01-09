import styled from '@emotion/styled';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';
import { hoverDimEffect } from '@/styles/common';
import { Link } from 'react-router';

export const EmptyQuery = styled.p`
  ${getFontStyle('body', 'large')};
  color: ${COLORS.base.white};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TabContainer = styled.ul`
  position: sticky;
  top: 72px;
  display: flex;
  gap: 6px;
  background-color: ${COLORS.base.black};
  border-bottom: 2px solid ${COLORS.gray[10]};
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  width: 100%;
`;

export const MovieItem = styled.article`
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  ${hoverDimEffect};
`;

export const PersonItem = styled.article``;

export const PersonLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

export const PersonImgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const PersonName = styled.p`
  ${getFontStyle('body', 'large')};
  color: ${COLORS.base.white};
`;
