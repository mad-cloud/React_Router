import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/Homepage';
import Contact from './pages/Contact';
let App=()=>{
    return (
        <>
        <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
      </>
    )
}
export default App;