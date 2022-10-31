import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Navbar from './Components/Layout/Navbar'
import Add from './Components/Pages/Add'
import Home from './Components/Pages/Home'
import Scenarios from './Components/Pages/Scenarios'
import Vehicie from './Components/Pages/Vehicie'

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
      <Navbar />
      <Routes>
      <Route exact path='/add' element={<Add/>}/>
      </Routes>
      </BrowserRouter> */}
      <Add />
      <br/>
      <Scenarios/>
      <br/>
      <Vehicie/>
      <br/>
      <Home/>
    </div>
  )
}

export default App

