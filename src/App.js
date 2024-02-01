import React from 'react'
import './App.css';
import Home from './components/Home'
import Coments from './components/Coments'
import Info from './components/Info'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Home',
        element: <Home />
      },
      {
        path: '/Coments',
        element: <Coments />
      },
      {
        path: '/Info',
        element: <Info />
      }
    ]
  }
])




function App() {
  return (
    <RouterProvider router = {router} />
  );
}

export default App;