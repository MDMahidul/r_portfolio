import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'aos/dist/aos.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import MyWork from './components/MyWork/MyWork.jsx';
import ContactForm from './components/ContactForm/ContactForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/about',
        element:<About/>,
      },
      {
        path:'/projects',
        element:<MyWork/>,
      },
      {
        path:'/contact',
        element:<ContactForm/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router} />
</>
)
