'use client'
import { createGlobalStyle } from 'styled-components'

import { font } from './theme'

export const GlobalStyles = createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${font.family.Poppins};
  }

  html {
    font-size: 62.5%;
    width: 100vw;
    height: 100vh;
  }

  main {
    width: 100vw;
    height: 100vh;
  }

  body {
    font-size: 1.4rem;
    font-size: 1.4rem;
    width: 100vw;
    height: 100vh;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }

  #storybook-root {
    width: 100%;
    height: 100%;
  }

  h1 {
    font-size: 2.4rem;
    font-size: 2.4rem;
  }

  ul,
  li {
    list-style: none;
  }
  input {
    font-family: inherit;
  }
  textarea {
    resize: none;
  }

  a {
    color: inherit;
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

`
