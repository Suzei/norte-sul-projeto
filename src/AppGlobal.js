import { createGlobalStyle } from "styled-components";

const ResetCss = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
  }
  img {
    width: 100%;
    display: block;
  }

  button {
    text-transform: uppercase;
      border: none;
      padding: 10px 15px;
      display: flex;
      border-radius: 20px;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: var(--yellow);
  }

  ul {
    list-style: none;
    text-decoration: none;

  }
`

export default ResetCss