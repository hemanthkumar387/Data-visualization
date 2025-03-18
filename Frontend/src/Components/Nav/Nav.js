import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/excelchart" className="nav-link">Excel Data</Link>
      <Link to="/bargraph" className="nav-link">Form Data</Link>
    </nav>
  );
};

export default Navbar;
