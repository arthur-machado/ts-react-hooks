import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body, html, #root {
      max-width: 100vw;
      max-height: 100vh;
      width: 100%;
      height: 100%;
    }
`;

export default GlobalStyles;
