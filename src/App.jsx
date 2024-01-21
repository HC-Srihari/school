import { useState } from 'react'
//components
import Banner from './components/Banner'
import Header from './components/Header'
import Footer from './components/Footer'
//pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import {Outlet} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <Banner />
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
