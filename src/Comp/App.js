import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Login from './Login'
import Reg from './Reg'
import Contact from './Contact'
import Foot from './Foot'
const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reg" element={<Reg/>}/>
        <Route path='/ct' element={<Contact/>}/>

    </Routes>
    <Foot/>
    </BrowserRouter>
  )
}

export default App