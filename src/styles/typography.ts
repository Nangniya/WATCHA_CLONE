export const TYPOGRAPHY = {
  display: {
    large: {
      fontSize: '57px',
      lineHeight: '64px',
      fontWeight: 700,
    },
    medium: {
      fontSize: '45px',
      lineHeight: '52px',
      fontWeight: 700,
    },
    small: {
      fontSize: '36px',
      lineHeight: '44px',
      fontWeight: 700,
    },
  },
  headline: {
    large: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: 700,
    },
    medium: {
      fontSize: '28px',
      lineHeight: '36px',
      fontWeight: 700,
    },
    small: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 700,
    },
  },
  title: {
    large: {
      fontSize: '22px',
      lineHeight: '28px',
      fontWeight: 700,
    },
    medium: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    small: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 700,
    },
  },
  body: {
    large: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
    },
    medium: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
    },
    small: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 400,
    },
  },
  label: {
    large: {
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 400,
    },
    medium: {
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 400,
    },
    small: {
      fontSize: '11px',
      lineHeight: '16px',
      fontWeight: 400,
    },
  },
} as const;

export type TTypography = typeof TYPOGRAPHY;

export type TTextVariant = keyof typeof TYPOGRAPHY;
export type TTextSize = keyof (typeof TYPOGRAPHY)['display'];

export const getFontStyle = (variant: TTextVariant, size: TTextSize) => `
  font-family: 'Pretendard';
  font-size: ${TYPOGRAPHY[variant][size].fontSize};
  line-height: ${TYPOGRAPHY[variant][size].lineHeight};
  font-weight: ${TYPOGRAPHY[variant][size].fontWeight};
`;
