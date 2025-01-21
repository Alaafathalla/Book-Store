import './App.css';
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Contact from '../src/pages/Contact/Contact';
import Books from '../src/pages/Books/books';
import Masterlayout from '../src/MasterLayout/MasterLayout'; 

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
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

