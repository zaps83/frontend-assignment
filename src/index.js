import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { GlobalStyles } from './global-styles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
