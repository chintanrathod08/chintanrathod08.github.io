import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Education from '../Pages/Education'
import Skills from '../Pages/Skills'
import Projects from '../Pages/Projects'
import Contact from '../Pages/Contact'

function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/about' element={<About/>} ></Route>
            <Route path='/education' element={<Education/>} ></Route>
            <Route path='/skills' element={<Skills/>} ></Route>
            <Route path='/projects' element={<Projects/>} ></Route>
            <Route path='/contact' element={<Contact/>} ></Route>
        </Routes>
    </div>
  )
}

export default Router
