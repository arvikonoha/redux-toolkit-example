import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import Home from './pages/Home/Home';
import { store } from './stores/store.js';

const router = createBrowserRouter([{
  path: '/',
  element: <App />
}, {
  path: '/login',
  element: <Login />
}, {
  path: '/register',
  element: <Register />
},{
  path: '/home',
  element: <Home />
},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
