import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

*, *::before, *::after {
  box-sizing: border-box;
}

html, body {
  height: 100%;
}

html {
	font-size: 62.5%; 
	width: 100%; 
	overflow-y: scroll; 
}

body {
  font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.6rem;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
}

ul
ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

img, picture, video, canvas, svg {
  max-width: 100%;
  display: block;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
}

h1 {
  font-size: 5.6rem;
  line-height: 5.8rem;
  letter-spacing: 2px;
}

h2 {
  font-size: 4rem;
  line-height: 4.4rem;
  letter-spacing: 1.5px;
}

h3 {
  font-size: 3.2rem;
  line-height: 3.6rem;
  letter-spacing: 1.15px;
}

h4 {
  font-size: 2.8rem;
  line-height: 3.8rem;
  letter-spacing: 2px;
}

h5 {
  font-size: 2.4rem;
  line-height: 3.3rem;
  letter-spacing: 1.7px;
}

h6 {
  font-size: 1.8rem;
  line-height: 2.4rem;
  letter-spacing: 1.3px;
}

p {
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
}
`;
