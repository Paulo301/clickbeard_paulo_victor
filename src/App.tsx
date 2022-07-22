import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";

import { Header } from "./components/Header";
import { Routes } from "./routes";

import "react-loading-skeleton/dist/skeleton.css";
import 'react-modern-drawer/dist/index.css';

import { store } from './store';
import { Provider } from 'react-redux'

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes />
          <Footer />
        </BrowserRouter>
      </Provider>
      
      <GlobalStyle />
    </React.Fragment>
  );
}