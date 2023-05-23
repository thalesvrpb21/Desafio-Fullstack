import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    background-color: #000000;
    }

a{
    color: #000000;
    text-decoration: none;
  }

ul, ol, li{
    list-style: none;
  }

:root{

}

`

export {GlobalStyle}