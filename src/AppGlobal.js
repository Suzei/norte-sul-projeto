import { createGlobalStyle } from "styled-components";

const ResetCss = createGlobalStyle`
  * {
    padding: 0;
    margin: 0%;
    box-sizing: border-box;
    font-family: var(--font-family);
  }
  img {
    width: 100%;
    display: block;
  }
`

export default ResetCss