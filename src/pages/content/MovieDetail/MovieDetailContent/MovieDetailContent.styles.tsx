import styled from '@emotion/styled';
import { Link } from 'react-router';
import { getFontStyle } from '@/styles/typography';
import { COLORS } from '@/styles/colors';
import { resetButtonStyle } from '@/styles/common';
import { css } from '@emotion/react';

export const Container = styled.div`
  padding: 40px 0;
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 40px;
`;

export const Title = styled.h1`
  ${getFontStyle('display', 'medium')};
  color: ${COLORS.base.white};
`;

export const SubInfoContainer = styled.div`
  display: flex;
  gap: 8px;
  ${getFontStyle('body', 'medium')};
  color: ${COLORS.gray[90]};
`;

export const Age = styled.span`
  padding: 1px 5px;
  background-color: ${COLORS.background[70]};
  font-weight: 500;
  color: ${COLORS.base.white};
  border-radius: 3px;
`;

export const Rate = styled.span`
  font-weight: 500;
  color: ${COLORS.base.white};
`;

export const Overview = styled.div`
  max-width: 60%;
  ${getFontStyle('body', 'medium')};
  line-height: 23px;
  color: ${COLORS.gray[60]};
`;

export const Video = styled(Link)<{ $disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  ${getFontStyle('body', 'large')};
  color: ${COLORS.base.white};

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

export const BackDrop = styled.div`
  position: relative;

  ::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 70%;
    height: 100%;
    background: linear-gradient(90deg, #000 5%, #000000b3 30%, #00000073 50%, #0003 80%, #0000 100%);
  }

  ::after {
    content: '';
    position: absolute;
    top: 33%;
    left: 0;
    width: 100%;
    height: 67%;
    background: linear-gradient(#0000 0%, #00000073 30%, #000c 55%, #000000e6 68%, #000 86%);
  }
`;

export const RightOptions = styled.ul`
  display: flex;
  gap: 12px;
`;

export const AdditionalContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 40px 10px 40px;
  border-bottom: 0.2px solid ${COLORS.gray[10]};
`;

export const OptionContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 70px;
  padding: 6px 0;
  border-radius: 4px;
  ${getFontStyle('label', 'medium')}
  color: ${COLORS.gray[90]};
  ${resetButtonStyle};

  &:hover {
    background-color: ${COLORS.opacity[10]};
  }
`;

export const TabContainer = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

export const CastContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 1300px;
  padding: 0 40px;
`;

export const PeopleGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
`;

export const H2 = styled.h2`
  ${getFontStyle('title', 'medium')};
  color: ${COLORS.base.white};
`;

export const CastTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const More = styled(Link)`
  text-decoration: none;
  ${getFontStyle('body', 'medium')};
  color: ${COLORS.gray[60]};
`;

export const RelatedContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;

export const SimilarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  width: 100%;
`;

export const SimilarMovie = styled.article`
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
