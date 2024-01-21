import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Aboutus from './pages/Aboutus.jsx'
import Contact from './pages/Contact.jsx'
import Admission from './pages/Admission.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/about',
          element:<Aboutus/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        {
          path:'/admission',
          element:<Admission/>
        }
    ]

  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
