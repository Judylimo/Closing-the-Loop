import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import AboutUs from './AboutUs'


function App() {
  return (
   <>
    <Router>
        <Navbar />
        <AboutUs/>
        <Routes>
          <Route path='/' exact component={<Home />} />         
        </Routes>
        <MainContent />
      </Router>
   </>
      
   
  );
}

export default App;
