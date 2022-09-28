import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Searvice from './components/Searvice';
import Contact from './components/Contact';
import Pricing from './components/Pricing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
    <Routes>
      <Route path='/' element={<Home />}>
      </Route>
      <Route path='/AboutUs' element={<AboutUs />}>
      </Route>
      <Route path='/Searvice' element={<Searvice />}>
      </Route>
      <Route path='/Contact' element={<Contact />}>
      </Route>
      <Route path='/Pricing' element={<Pricing />}>
      </Route>
    </Routes>
  </Router>

);
