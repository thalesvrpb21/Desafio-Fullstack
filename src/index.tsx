import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { GlobalStyle } from './styles/Global';
import { UserProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <UserProvider>

        <GlobalStyle />
        <App />

      </UserProvider>
    </BrowserRouter>

  </React.StrictMode>
);
