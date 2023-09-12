import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './assets/pages/accueil'
import './App.css'
import Login from './assets/pages/connexion'
import Register from './assets/pages/inscription'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App