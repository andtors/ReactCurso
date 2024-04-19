import { useState } from 'react'
import {BrowserRouter, Router, Route, Link, Routes} from 'react-router-dom'

import { HookUseContext } from './components/HookUseContext'

import Home from './pages/Home'
import About from './pages/About'


import './App.css'

function App() {
  
  return (
    <>
     <HookUseContext>
     <h1>React Hooks</h1>
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
     </HookUseContext>
    </>
  )
}

export default App
