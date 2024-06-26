import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
    }
`
