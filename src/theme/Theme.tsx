import * as React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  breakpoint: {
    // TODO: extend the set of breakpoints when needed
    desktop: '(min-width: 50rem)',
  },
  color: {
    white: '#ffffff',
    whiteSmoke: '#f7f7f7',
    whiteSmokeDark: '#f0f0f0',
    lavenderBlue: '#c2e0fd',
    endeavour: '#315493',
    midnightBlue: '#18376A',
    lightPink: '#ffadb2',
    cosmicLatte: '#ecfdf2',
    chinook: '#97d0a2',
    darkOrange: '#ff8a00',
  },
  space: [
    0,
    '0.25rem',
    '0.5rem',
    '0.75rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.75rem',
    '2rem',
    '2.25rem',
  ],
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
