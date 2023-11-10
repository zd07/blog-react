import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap here
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<div>About</div>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
