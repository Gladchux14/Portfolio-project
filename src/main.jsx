import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/home.jsx'
import Contact from './pages/contact.jsx'
import Rootpage from './pages/rootpage.jsx'
import Portfolio from './pages/portfolio.jsx'
// import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Rootpage/>,
    children:[
      {
        index: true,
        element:<Homepage/>,
      },
      {
        path: "/portfolio",
        element:<Portfolio/>,
      },
      {
        path: "/contact",
        element:<Contact/>,
      },
    ]
  },
  // <App/>
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)