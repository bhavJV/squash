import React from 'react';
import NavBar from './Navbar/Navbar';
import RouterConfig from './RouterConfig';
import "./App.css";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="homepage">
      
        <div>
          <BrowserRouter>
            <NavBar />
            <RouterConfig />
          </BrowserRouter>
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