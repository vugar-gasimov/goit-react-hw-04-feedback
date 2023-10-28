import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { GlobalStyles } from './styles/Global';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode basename="/vugar-gasimov/">
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
