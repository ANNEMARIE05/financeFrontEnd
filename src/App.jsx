import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Accueil from './assets/pages/accueil'
import './App.css'
import HistoriqueClient from './assets/pages/historiqueClients'
import DepotClient from './assets/pages/depotClient'
import RetraitClient from './assets/pages/retraitClient'
import InfoClient from './assets/pages/infoClient'
import PlateformeAdmin from './assets/pages/plateformeAdmin'
import Inscription from './assets/pages/inscription'
import Connexion from './assets/pages/connexion'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/register' element={<Inscription />} />
        <Route path='/login' element={<Connexion />} />
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