import React from 'react'
import { NavLink }  from 'react-router-dom'

const Header = () => {
  return (
    <>  
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Logo</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">about</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contact">contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Help">Help</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header