import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import About from './AboutUs/AboutUs';
import Centers from './Map/Map';
import Discord from './DiscordPage/DiscordPage';
import Login from './Login/login';

const RouterConfig = () => {
  return (
    <Routes >
      {/* <Route exact path="/home" element={<Home/>} /> this will become a nested thing and will cause error because you can't render a router in a router*/} 
      <Route path="/about" element={<About/>} />
      <Route path="/discord" element={<Discord/>} />
      <Route path="/centers" element={<Centers/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
};

export default RouterConfig;