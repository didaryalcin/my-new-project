import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';  // App bileşeninin doğru yolunu belirtin
import reportWebVitals from '../reportWebVitals';  // reportWebVitals dosyasının doğru yolunu belirtin
import './index.css'; // CSS dosyasını import edin

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
