import React from 'react';
import './Navbar.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact/Contact';

const Navbar = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Navbar;
