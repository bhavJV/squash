import React from 'react';
import NavBar from '../Navbar/Navbar';
import RouterConfig from '../RouterConfig';
import "./login.css";
import { BrowserRouter } from 'react-router-dom';

function login() {
  return (
    <div className="homepage">
      
        <div>
          <BrowserRouter>
            <NavBar />
            <RouterConfig />
          </BrowserRouter>
        </div>

        <div className='container'>
          <div className='login'>Login</div>
        <div className="usernameBox">
          <div className="text">
            Username
          </div>
          </div>
          <div className="passwordBox">
          <div className="text">
            Password
          </div>
          </div>
          <div className='passwordPrompt'>Forgot your password?</div>
        </div>
      </div>
  );
}

export default login;