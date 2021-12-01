import { breakpoints } from './breakpoints';

export const theme = {
  fontWeight: {
    light: 400,
    normal: 500,
    bold: 700,
  },
  colors: {
    primary: '#d87d4a',
    primaryLight: '#fbaf85',
    black: '#000000',
    blackTransparent: 'rgba(0, 0, 0, 0.4)',
    white: '#ffffff',
    veryDarkGray: '#101010',
    darkGray: '#181818',
    gray: '#f1f1f1',
    lightGray: '#fafafa',
  },
  transition: 'all 0.2s',
  borderRadius: '8px',
  navHeight: '90px',
  breakpoints,
};
