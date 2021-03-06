import { createGlobalStyle } from "styled-components"
import { colors, backgrounds } from "./colors"

const GlobalStyle = createGlobalStyle`
  
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box; // ensures that padding and border are included in the total width and height
    /* CSS wireframe mode */
    /* outline: 2px solid blue; */
  }

  html {
    font-size: 62.5%; //1rem=10px
  }

  body {
    box-sizing: border-box;
    background-color: ${backgrounds.bgGreyLight};
    font-size: 1.6rem;
    /* width: 90vw; */
    margin: 0 auto;
    font-family: 'Poppins';
  }

  ::selection {
    background-color: ${backgrounds.bgContentLight};
    color: ${colors.colorBlack}
  }

  p {
    font-size: 1.6rem;
    margin-bottom: 1.4rem;
  }

  a {
    font-size: 1.6rem;
    text-decoration: none;
  }

  h1 {
    font-size: 3.4rem;
  }
  h2 {
    font-size: 2.8rem;
  }
  h3 {
    font-size: 2.2rem;
  }
  h4 {
    font-size: 1.6rem;
  }
`

export default GlobalStyle
