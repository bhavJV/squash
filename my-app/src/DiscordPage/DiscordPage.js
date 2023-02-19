import React from 'react';
import NavBar from '../Navbar/Navbar';
import "./DiscordPage.css"

function App() {
  return (
    
    <div className="homepage">
      <div>
      <NavBar />
      </div>
      <img src={require('../discordThing.png')} />
      <div className = "text">
        Add our bot to your server!
      </div>
    </div>
  );
}

export default App;