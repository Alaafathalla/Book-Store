import './App.css';
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Contact from '../src/pages/Contact/Contact';
import Books from '../src/pages/Books/books';
import Login from '../src/pages/Login/Login';
import Blog from '../src/pages/Blog/blog';
import Masterlayout from '../src/MasterLayout/MasterLayout'; 
import Register from './pages/Register/Register';
import Notfound from './pages/Notfound/notfound';
import About from './pages/About/about';
import Bookdetails from './pages/Booksdetails/booksdetails';

export default function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Masterlayout  />,
      errorElement: <Notfound />,
      children: [
        { path: '/', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'contact', element: <Contact/> },
        { path: 'about', element: <About/> },
        { path: 'books', element: <Books/> },
        { path: 'blog', element: <Blog/> },
        { path: 'login', element: <Login/> },
        { path: 'register', element: <Register/> },
        { path: 'books/:id', element: <Bookdetails/> },
    

      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

