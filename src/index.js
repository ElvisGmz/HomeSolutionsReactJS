import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&display=swap');
  * {
    font-family: 'Hind Madurai', sans-serif;
  }

  body{
    margin: 0;
    user-select: none;
  }

  ::-webkit-scrollbar{
    width: 0px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
