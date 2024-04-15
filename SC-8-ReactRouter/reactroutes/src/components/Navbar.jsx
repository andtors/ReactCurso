// 2 - Links com react router
import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      {/*  <Link to="/">Home</Link>
        <Link to="/about">About</Link> 
         // </nav>className={({isActive}) => (isActive ? 'esta-ativo' : 'nao-ativo')}
         */}
       <NavLink to="/" >Home</NavLink>
       <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default Navbar