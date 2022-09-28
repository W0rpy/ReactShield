import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Popap from './components/Popap';

function App() {

  return (
    <div className='App_wrapper' >
      <header className='header'>
        <div className='container'>
          <Header />
        </div>
      </header>
    </div >
  )
}
export default App;
