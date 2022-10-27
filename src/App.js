import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Searvice from './components/Searvice';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import AboutUs from './components/AboutUs';

function App() {

  return (
    <div className='App_wrapper' >
      <Header />
      <Routes>
        <Route path='/ReactShield' element={<Home />}>
        </Route>
        <Route path='AboutUs' element={<AboutUs />}>
        </Route>
        <Route path='Searvice' element={<Searvice />}>
        </Route>
        <Route path='Contact' element={<Contact />}>
        </Route>
        <Route path='Pricing' element={<Pricing />}>
        </Route>
      </Routes>
    </div>
  )
}
export default App;
