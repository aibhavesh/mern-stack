import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import Help from '../Pages/Help'

const AllRoutes = () => {
  return (
  <Routes>
             <Route path='' element={<Home />} />
             <Route path='about' element={<About />} />
             <Route path='services' element={<Services />} />
             <Route path='contact' element={<Contact />} />
             <Route path='help' element={<Help />} />
  </Routes>
  )
}

export default AllRoutes