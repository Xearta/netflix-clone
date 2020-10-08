import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';

import 'normalize.css';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
