import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${({ theme }) => theme.colors.grayLightest};
    font-family: 'Lato', sans-serif;
  }
  a {
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: none;
  }
`

export default GlobalStyles
