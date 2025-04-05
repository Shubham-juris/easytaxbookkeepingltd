import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import About from '../pages/About'
import AboutTax from '../pages/AboutTax'
import ContactUs from '../pages/ContactUs'
const Pageroute = () => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/AboutTax' element={<AboutTax/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>

        </Routes> 
    </>
  )
}

export default Pageroute
