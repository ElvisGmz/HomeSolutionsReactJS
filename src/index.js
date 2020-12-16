import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import App from './App';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  body{
    margin: 0;
  }

  ::-webkit-scrollbar{
    width: 5px;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);