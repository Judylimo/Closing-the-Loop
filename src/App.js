import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import AboutUs from './components/AboutUs'
import SignupForm from './components/pages/signup_form';



function App() {
  return (
   <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home/>}/>
            <Route path='sign-up' element={<SignupForm/>}/>
            <Route path='about-us' element={<SboutUs/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
   </>
      
   
  );
}

export default App;
