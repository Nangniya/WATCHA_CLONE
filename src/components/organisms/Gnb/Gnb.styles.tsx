import styled from '@emotion/styled';
import { Link } from 'react-router';
import { getFontStyle } from '../../../styles/typography';
import { COLORS } from '../../../styles/colors';
import { resetButtonStyle } from '@/styles/common';

export const Container = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 12px 40px;
  background-color: ${COLORS.base.black};
  z-index: 10;
`;

export const LeftContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const RightContainer = styled.nav`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  height: 29.6px;
  margin-right: 20px;
  text-decoration: none;
`;

export const LoggedInUl = styled.ul`
  display: flex;
  gap: 23px;
  align-items: center;
  margin-left: 23px;
  cursor: pointer;
  color: ${COLORS.base.white};
`;

export const Bell = styled.button`
  display: flex;
  align-items: center;
  color: ${COLORS.base.white};
  ${resetButtonStyle};
`;

export const BellWrapper = styled.div`
  position: relative;
`;

export const NotificationWrapper = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
`;

export const Profile = styled.button`
  ${resetButtonStyle};
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 50%;
  img {
    width: 100%;
  }
`;

export const NotLoggedInUl = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${COLORS.base.white};
  cursor: pointer;
`;

export const LogIn = styled(Link)`
  display: flex;
  align-items: center;
  padding: 7px 12px;
  border: 0;
  outline: none;
  border-radius: 4px;
  text-decoration: none;
  ${getFontStyle('body', 'small')};
  color: ${COLORS.base.white};
  &:hover {
    background-color: ${COLORS.opacity[10]};
  }
`;

export const SignUp = styled(Link)`
  display: flex;
  align-items: center;
  padding: 7px 12px;
  border: 0;
  outline: none;
  border-radius: 4px;
  background-color: ${COLORS.primary[10]};
  text-decoration: none;
  ${getFontStyle('body', 'small')};
  color: ${COLORS.base.white};
  &:hover {
    background-color: ${COLORS.primary[40]};
  }
`;
