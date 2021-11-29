import 'styled-components';
import { theme } from './src/styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme {
    fontWeight: Theme['fontWeight'];
    colors: Theme['colors'];
    breakpoints: Theme['breakpoints'];
    transition: Theme['transition'];
  }
}
