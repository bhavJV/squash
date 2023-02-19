import React from 'react';
import NavBar from './Navbar/Navbar';
import Router from './Routes';
import "./App.css";

function App() {
  return (
    <div className="homepage">
      
        <div>
          <NavBar />
          <Router />
        </div>

        <div className='logo-container'>
          <div className="slogan">
            Recycle
          </div>
          <div className="slogan-text">
            We Have Only One Earth
          </div>
        </div>
      </div>
  );
}

export default App;