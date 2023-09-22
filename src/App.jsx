import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './assets/pages/accueil'
import './App.css'
import Login from './assets/pages/connexion'
import Register from './assets/pages/inscription'
import HistoriqueClient from './assets/pages/historiqueClients'
import DepotClient from './assets/pages/depotClient'
import RetraitClient from './assets/pages/retraitClient'
import InfoClient from './assets/pages/infoClient'
import PlateformeAdmin from './assets/pages/plateformeAdmin'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/historiqueClient' element={<HistoriqueClient />} />
        <Route path='/depotClient' element={<DepotClient />} />
        <Route path='/retraitClient' element={<RetraitClient />} />
        <Route path='/infoClient' element={<InfoClient />} />
        <Route path='/plateformeAdmin' element={<PlateformeAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App