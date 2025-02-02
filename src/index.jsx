import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './app.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


if (process.env.NODE_ENV === 'production') {
  serviceWorkerRegistration.register();
}

reportWebVitals();
