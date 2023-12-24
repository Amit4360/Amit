import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes, Outlet, NavLink, useNavigate, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import { Link } from "react-router-dom";
import Technical  from './components/Technical.jsx';
import Creatives from './components/Creatives.jsx';
import Marketing from './components/Marketing.jsx';
import Publicity from './components/Publicity.jsx';
import Logistics from './components/Logistics.jsx';
import Layout from './components/Layout.jsx';





const router = createBrowserRouter(
  createRoutesFromElements(
        
        <Route path="/" element={<App/>} >
          <Route path='' element={<Technical/>}/>
        <Route path='/Technical' element={<Technical/>} />
        <Route path="/Creatives" element={<Creatives/>} />
        <Route path="/Publicity" element={<Publicity/>} />
        <Route path="/Logistics" element={<Logistics/>} />
        <Route path="/Marketing" element={<Marketing/>} />
 </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
