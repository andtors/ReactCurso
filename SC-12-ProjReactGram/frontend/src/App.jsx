import { useState } from 'react'

// Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// Hooks
import {useAuth} from './hooks/useAuth'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Profile from './pages/Profile/Profile'
import Search from './pages/Search/Search'

import './App.css'
import EditProfile from './pages/EditProfile/EditProfile'
import Photo from './pages/Photo/Photo'

function App() {
  const {auth, loading} = useAuth()

  if(loading){
    return <p>Carregando...</p>
  }
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <div className='container'>
    <Routes>
      <Route path="/" element={auth ? <Home /> : <Navigate to="/login" />}></Route>
      <Route path="/profile" element={auth ? <EditProfile /> : <Navigate to="/login" />}></Route>
      <Route path="/users/:id" element={auth ? <Profile /> : <Navigate to="/login" />}></Route>
      <Route path="/login" element={!auth ? <Login /> : <Navigate to="/" />}></Route>
      <Route path="/register" element={!auth ? <Register /> : <Navigate to="/" />}></Route>
      <Route path="/search" element={auth ? <Search /> : <Navigate to="/login" />}></Route>
      <Route path="/photos/:id" element={auth ? <Photo /> : <Navigate to="/login" />}></Route>
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
