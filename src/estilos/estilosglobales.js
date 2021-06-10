import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Roboto', normal;
     html, body {
         overflow-x:hidden;
     }
 }
`