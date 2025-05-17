export const COLORS = {
  base: {
    black: '#000',
    white: '#fff',
    dim: '#000c',
    playerDim: '#0009',
    disabledComponent: '#ffffff4d',
  },
  background: {
    10: '#030708',
    20: '#141517',
    30: '#191a1c',
    40: '#1f2023',
    50: '#222326',
    60: '#28292a',
    70: '#2e2f31',
    80: '#303133',
    90: '#333436',
    100: '#505155',
  },
  blue: {
    10: '#3da7ff',
    20: '#1a6ce7',
  },
  green: {
    10: '#0aca9e',
  },
  opacity: {
    10: '#ffffff1a',
    15: '#ffffff26',
    20: '#fff3',
    30: '#ffffff4d',
    40: '#fff6',
    50: '#ffffff80',
    60: '#fff9',
    70: '#ffffffb3',
    80: '#fffc',
    90: '#ffffffe6',
  },
  pink: {
    10: '#de2a60',
  },
  gray: {
    10: '#1b1c1d',
    20: '#38393d',
    30: '#48484b',
    40: '#4f5152',
    50: '#6d6d6d',
    60: '#84868d',
    70: '#999ca1',
    80: '#bdbdbd',
    90: '#babac1',
    100: '#d4d7db',
  },
  primary: {
    10: '#f82f62',
    20: '#f82c60',
    30: '#f6285c',
    40: '#ff3d6e',
    50: '#f6407a',
    60: '#ffd6e3',
  },
  purple: {
    10: '#40032e',
  },
  red: {
    10: '#e73e3e',
  },
  yellow: {
    10: '#fbc02d',
  },
} as const;

export type Colors = typeof COLORS;
