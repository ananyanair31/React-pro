// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import About from './pages/about';
import Projects from './pages/project';
import Home from './pages/home';
import Contact from './pages/contact';
import { Route,Routes } from "react-router-dom";
// import DarkMode from './components/DarkMode/DarkMode';

function App() {

  return (
    <>
      
      {/* <DarkMode/> */}
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
    </>
  );
};

export default App;
