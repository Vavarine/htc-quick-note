import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    @media (max-width: 1080px) {
      font-size: 93.75% // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5% // 14px
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1rem;
  }
  
  body {
    font-family: 'Barlow', sans-serif;
    color: ${({ theme }) => theme.colors.grey800}
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  input, textarea {
    color: inherit;
    font-family: inherit;
    outline: none;
  }

  textarea {
    resize: none;
    font-family: inherit
  }
`;
