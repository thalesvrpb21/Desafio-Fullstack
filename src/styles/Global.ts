import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

a{
  color: #000000;
  text-decoration: none;
}

ul, ol, li{
  list-style: none;
}

button{
  cursor: pointer;
}

button:hover{
  background: var(--red-1);
  color: var(--white);
  border: var(--white);
}

a: hover{
  color: var(--red-1);
}

:root{

  --grey-1: #5F5F65;
  --grey-2: #9E9E9E;
  --grey-3: #BABABA;
  --white: #FFF;
  --black: #000000;
  --red-1: #FF948D;

  --radius-4: 4px;
  --radius-6: 6px;
  --radius-8: 8px;
  --radius-10: 10px;
  --radius-20: 20px;

  --rem-08: 0.8rem;
  --rem-09: 0.9rem;
  --rem-11: 1.1rem;
  --rem-15: 1.5rem;
  --rem-16: 1.6rem;

}

`

export {GlobalStyle}