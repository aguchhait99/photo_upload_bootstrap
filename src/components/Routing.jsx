import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddData from './AddData'
import ShowData from './ShowData'
import Navbar from './Navbar'

const Routing = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<AddData/>}/>
            <Route path='/showdata' element={<ShowData/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default Routing
