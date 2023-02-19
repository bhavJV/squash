import React from 'react';
import "./DiscordPage.css"

function Discord() {
  return (
    <div className="discord-page">
      <img src={require('../discordThing.png')} />
      <div className = "text-discord">
        <a href="https://discord.com/api/oauth2/authorize?client_id=1076530772439212042&permissions=8&scope=bot">Add our bot to your server!</a>
      </div>
    </div>
  );
}

export default Discord;