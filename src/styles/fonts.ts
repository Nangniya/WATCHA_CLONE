import { css } from '@emotion/react';
import PretendardRegular from '../assets/fonts/Pretendard-Regular.woff';
import PretendardMedium from '../assets/fonts/Pretendard-Medium.woff';
import PretendardBold from '../assets/fonts/Pretendard-Bold.woff';

export const fontFace = css`
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegular}) format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardMedium}) format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBold}) format('woff');
    font-weight: 700;
  }
`;
