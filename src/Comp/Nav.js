import {Link} from 'react-router-dom'
import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/reg">Register</Link>
        <Link to="/ct">Contact US</Link>
    </nav>
  )
}

export default Nav