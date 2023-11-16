// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Navbar from './components/Navbar';

function App() {
  const [blogs, setBlogs] = useState([]);

  const handleAddBlog = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home blogs={blogs} onAddBlog={handleAddBlog} />}
          />
          <Route path='/blog' element={<Blog blogs={blogs} onAddBlog={handleAddBlog}/>} />
          <Route path='/about' element={<div>About</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
