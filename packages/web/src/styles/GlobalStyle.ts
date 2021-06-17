import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', 'SF Pro Display', sans-serif
  }

  body {
    width: 100%;
    margin: 0;
    background: #f2f2f2;
  }
`

export { GlobalStyle }
