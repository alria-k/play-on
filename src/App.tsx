import { FunctionComponent } from "react"
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

import { HomePage } from "./pages"

const ResetCss = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  ul,
  ol {
    padding: 0;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: 'TT-interfaces', sans-serif;
    font-weight: 400;
    overflow-x: hidden;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
    display: block;
  }
  article>*+* {
    margin-top: 1em;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  button {
    cursor: pointer;
  }
  p{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
  }
  h2, h3, h4, h5, h6{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
`;

const App: FunctionComponent = () => {

  return (
    <div>
      <BrowserRouter basename="/">
          <ResetCss/>
          <HomePage/>
      </BrowserRouter>
    </div>
  )
}

export default App
