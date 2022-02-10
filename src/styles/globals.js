import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: Raleway ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  ::-webkit-scrollbar {
    width: 20px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }

`;

export default GlobalStyles;