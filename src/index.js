import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRouter } from './Router';
import {
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createRouter();
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
