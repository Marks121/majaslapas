import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Pieslegties from "./Pieslegties"
import Dati from "./Dati";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Registresanas from './Registresanas';
import Sudzibas from './Sudzibas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pieslegties" element={<Pieslegties />} />
        <Route path="/dati" element={<Dati />} />
        <Route path="/registresanas" element={<Registresanas />} />
        <Route path="/sudzibas" element={<Sudzibas />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

