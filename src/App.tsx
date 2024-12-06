import { FunctionComponent } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';

import { Colors } from "./utils/styleVariables";

import { HomePage } from "./pages"
import { Layout } from "./ui";

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
    position: relative;
    margin: 15px 0 50px 0;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    font-family: 'TT-interfaces', sans-serif;
    overflow-x: hidden;
    background-color: ${Colors.BackgroundFill};
    color: ${Colors.TextColor};
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
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
  p, a, input{
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
    font-weight: 500;
    font-style: normal;
  }
`;

const App: FunctionComponent = () => {
  return (
    <>
    <ResetCss/>
    <BrowserRouter basename="/">
        <Routes>
            <Route path="/" 
            element={
                <Layout>
                  <HomePage />
                </Layout>
              } 
            />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
