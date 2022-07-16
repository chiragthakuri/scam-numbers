import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NumbersContextProvier } from './context/NumbersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NumbersContextProvier>
      <App />
    </NumbersContextProvier>
  </React.StrictMode>
);
