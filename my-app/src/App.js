import React from 'react';
import Map from './Map';
import NavBar from './Navbar/Navbar';
import "./App.css"

function App() {
  return (
    
    <div className="homepage">
      <div>
      <NavBar />
      </div>
      
      <div className='logo-container'>
        <div className = "slogan">
          Recycle
        </div>
        <div className = "slogan-text">
          We Have Only One Earth
        </div>
      </div>
    </div>
  );
}

export default App;