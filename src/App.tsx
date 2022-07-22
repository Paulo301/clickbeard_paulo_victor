import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";

import { Header } from "./components/Header";
import { Routes } from "./routes";

import "react-loading-skeleton/dist/skeleton.css";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
      </BrowserRouter>
      
      <GlobalStyle />
    </React.Fragment>
  );
}