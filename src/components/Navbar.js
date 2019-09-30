import React from 'react'
import { NavLink } from 'react-router-dom'

import '../CSS/loginRegNav.css'


export default function Navbar() {

  return (
    <div className="mainNavDiv">
      <nav>
          <NavLink to="/register" className="navButton" >Register</NavLink>
          <NavLink to="/login" className="navButton">Login</NavLink>
      </nav>
    </div>
  )
}
