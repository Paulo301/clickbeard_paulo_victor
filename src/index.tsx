import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';

import { makeServer } from './mirage';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);