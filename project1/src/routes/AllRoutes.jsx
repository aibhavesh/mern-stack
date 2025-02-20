import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contacts'
import Services from '../pages/Services'
import Help from '../pages/Help'
import Meet from '../pages/Meet'  

const AllRoutes = () => {
  return (
    <>  
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='Services' element={<Services/>} />
        <Route path='Help' element={<Help />} />
        <Route path='Meet' element={<Meet />} />
    </Routes>  
    </>
  )
}

export default AllRoutes