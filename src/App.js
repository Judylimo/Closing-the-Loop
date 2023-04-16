import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';



function App() {
  return (
   <>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={<Home />} />         
        </Routes>
        <MainContent />
      </Router>
   </>
      
   
  );
}

export default App;
