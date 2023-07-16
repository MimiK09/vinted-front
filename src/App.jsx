
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Offer from './Pages/Offer';
// import { useState } from 'react'


function App() {


  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route patch="/offer/:id" element={<Home />} />
      </Routes>
    
    </Router>
  )
}

export default App
