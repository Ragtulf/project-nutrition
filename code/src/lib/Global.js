import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Work Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #ff6677;
    background-image: linear-gradient(0deg, #ff6677 0%, #fea494 100%);
    color: #184429;

    @media (max-width: 400px) {
    background-color: #c5f759;
    background-image: none;
  }
    
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
}
`
