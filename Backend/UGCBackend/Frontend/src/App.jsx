import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import Jobs from './pages/jobListings';
import Profile from './pages/profile';
import Services from './pages/Brands';
import { Routes, Route } from "react-router-dom"; 

const App = () => {
  return (
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/brands" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    
  )
}

export default App
