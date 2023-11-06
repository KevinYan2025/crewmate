
import { useState } from 'react'
import './App.css'
import CreateCrewmate from './CreateCrewmate'
import CrewmateGallery from './CrewmateGallery'
import Home from './Home'
import SideNavBar from './SideNavBar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  const [crewmates,setCrewmates]=useState([{}])

  return (
    <>
      <div className="app">
        <BrowserRouter>
        <div className="whole-screen">
        <SideNavBar />
          <Routes>
            <Route path='/' index={true} element={<Home/>}/>
            <Route path='/createCrewmate' element={<CreateCrewmate crewmates={crewmates} setCrewmates={setCrewmates} />}/>
            <Route path='/crewmateGallery' element={<CrewmateGallery  crewmates={crewmates} />}/>
           
          </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
