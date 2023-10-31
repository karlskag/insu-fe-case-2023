import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AppComponent from './app';

import './styles/base.css';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </React.StrictMode>,
);
