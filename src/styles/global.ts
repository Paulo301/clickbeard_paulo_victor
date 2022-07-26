import { createGlobalStyle } from 'styled-components';

export const rootColors = {
  white: '#fff',

  background: '#F2F7F2',
  backgroundFooter: '#488286',
  backgroundButtonHover: 'rgba(0, 0, 0, 0.04)',
  textPrimary: '#020202',
  textSecondary: '#77878B',
  button: '#EE964B'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }

    scroll-behavior: smooth;
    height: 100%;
  }

  body {
    background: ${rootColors.background};
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;