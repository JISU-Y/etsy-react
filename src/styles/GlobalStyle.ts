import { createGlobalStyle } from 'styled-components';
import { reset } from './reset';

const baseFont = `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
sans-serif;`;

const GlobalStyle = createGlobalStyle`

/* reset style */
${reset}

/* font style - 10px: 1rem */
html {
    font: normal 10px ${baseFont}; 
    -webkit-font-smoothing: antialiased;
  }

  /* default text style */
  body {
    font-family: 'Roboto', ${baseFont};
  }
`;

export default GlobalStyle;
