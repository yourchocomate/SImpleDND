import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./main.css";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import { AuthProvider } from './contexts'

const Main = () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default Main;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
)
