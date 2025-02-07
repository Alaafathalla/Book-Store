import './App.css';
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Contact from '../src/pages/Contact/Contact';
import Books from '../src/pages/Books/books';
import Login from '../src/pages/Login/Login';
import Masterlayout from '../src/MasterLayout/MasterLayout'; 
import Register from './pages/Register/Register';

export default function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Masterlayout  />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'contact', element: <Contact/> },
        { path: 'books', element: <Books/> },
        { path: 'login', element: <Login/> },
        { path: 'register', element: <Register/> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

