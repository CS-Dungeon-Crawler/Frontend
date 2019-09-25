import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  return (
    <div>
      <nav>
        <ul>
          <li className="mainnav-link">
            <NavLink to="/register">Register</NavLink>
          </li>
          <li className="mainnav-link">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
