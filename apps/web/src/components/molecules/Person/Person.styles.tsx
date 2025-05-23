import styled from '@emotion/styled';
import { Link } from 'react-router';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@nangniya/ui';

export const Container = styled.li``;

export const PersonLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  padding: 8px 0;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const NoImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.gray[60]};
  color: ${COLORS.base.black};
  ${getFontStyle('body', 'medium')};
  text-align: center;
  word-break: break-word;
`;

export const CastInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;

export const CastName = styled.p`
  ${getFontStyle('title', 'small')};
  color: ${COLORS.base.white};
`;

export const CastPosition = styled.p`
  ${getFontStyle('body', 'small')};
  color: ${COLORS.gray[60]};
`;
