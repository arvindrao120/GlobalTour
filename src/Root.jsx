import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router'
import WhatsAppBtn from './Components/WhatsAppBtn/WhatsAppBtn'

function Root() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <WhatsAppBtn/>
    <Footer/>
    </>
  )
}

export default Root