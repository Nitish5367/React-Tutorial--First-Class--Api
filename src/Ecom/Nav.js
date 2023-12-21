import React from 'react'
import { Link } from 'react-router-dom'
import  './Nav.css'
const Nav = () => {

  return (
    <nav>
        <Link  to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Login">Login</Link>
        <Link to="/reg">Register</Link>
        <Link to="ct">ContactUS</Link>
    </nav>
  )
}

export default Nav