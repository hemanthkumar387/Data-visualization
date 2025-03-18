import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Nav/Nav';
import './Main.css';

const Home = () => {
  const handleCardClick = (title) => {
    console.log(`Clicked on card with title: ${title}`);
  };

  return (
    <div className='Main'>
      <Navbar />

      <div className="box-container">
        <Link to="/excel" className="box-link">
          <button className="box" onClick={() => handleCardClick("Excel")}>
            <h2>Excel</h2>
          </button>
        </Link>
        <Link to="/form" className="box-link">
          <button className="box box-1" onClick={() => handleCardClick("Form")}>
            <h2>Form</h2>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
