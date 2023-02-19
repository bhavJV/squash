import React from 'react';
import "./login.css";

function login() {
  return (
    <div className="homepage">

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