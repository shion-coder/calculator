import { createGlobalStyle, keyframes } from 'styled-components';
import { normalize } from 'styled-normalize';

/* -------------------------------------------------------------------------- */

const fadeIn = keyframes`
  from {
      opacity: 0;
  }

  to {
      opacity: 1;
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    background: transparent;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    animation: ${fadeIn} 1s ease;
  }

  a {
    text-decoration: none;
  }
  
  html, body, #root {
    height: 100%;
  }
  
  @media (min-width: 400px) and (min-height: 400px) {
    html {
      font-size: 20px;
    }
  }
  
  @media (min-width: 500px) and (min-height: 500px) {
    html {
      font-size: 30px;
    }
  }
  
  @media (min-width: 600px) and (min-height: 600px) {
    html {
      font-size: 40px;
    }
  }
  
  @media (min-width: 800px) and (min-height: 800px) {
    html {
      font-size: 50px;
    }
  }  
`;
