import styled from '@emotion/styled';
import { getFontStyle } from '../../../styles/typography';
import { COLORS } from '../../../styles/colors';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 360px;
  max-height: 560px;
  margin-top: 7px;
  background-color: ${COLORS.background[60]};
  border-radius: 4px;
  overflow: auto;
`;

export const H4 = styled.h4`
  padding: 20px 16px 12px 16px;
  ${getFontStyle('title', 'medium')};
  color: ${COLORS.base.white};
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.background[90]};
  }
`;

export const Img = styled.img`
  width: 56px;
  height: 56px;
  padding: 3px;
  background-color: rgb(208, 132, 235);
  border-radius: 50%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 246px;
`;

export const Title = styled.p`
  ${getFontStyle('body', 'medium')};
  color: ${COLORS.base.white};
`;

export const SubTitle = styled.p`
  ${getFontStyle('body', 'small')};
  color: ${COLORS.gray[60]};
`;

export const Time = styled.p`
  ${getFontStyle('label', 'small')};
  color: ${COLORS.gray[60]};
`;
