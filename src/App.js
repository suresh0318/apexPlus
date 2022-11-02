import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Add from './components/Add'
import Home from './components/Home'
import Scenarios from './components/Scenarios'
import Vehicle from './components/Vehicle'

const App = () => {
  return (
    <div>
      <BrowserRouter>
     <Navbar />
     <Routes>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/" element={<Add/>}/>
      <Route exact path="/scenarios" element={<Scenarios/>}/>
      <Route exact path="/vehicle" element={<Vehicle/>}/>

     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

