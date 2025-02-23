import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Projectdetails from './pages/Projectdetails';
import Modernfurniture from './pages/Modernfurniture';
import Projects from './pages/Project';
import Home from './pages/Home';
import Footer from './components/Footercode';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
    
    <Navigation />
    
    <Routes>
      
      <Route path='/' element={<Home/>}></Route>
      <Route path='/project' element={<Projects/>}></Route>
      <Route path='/projectdetailspage' element={<Projectdetails/>}></Route>
      <Route path='/modernfurniture' element={<Modernfurniture/>}></Route>
      
    </Routes> 
    <Footer />
  </BrowserRouter>
          
    </div>
  );
}

export default App;
