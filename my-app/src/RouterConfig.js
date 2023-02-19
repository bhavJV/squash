import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import Home from './App';
import About from './AboutUs/AboutUs';
import Centers from './Map/Map';
//import Discord from './Discord';
//import Login from './Login';

const RouterConfig = () => {
  return (
    <Routes >
      {/* <Route exact path="/home" element={<Home/>} /> this will become a nested thing and will cause error because you can't render a router in a router*/} 
      <Route path="/about" element={<About/>} />
      <Route path="/centers" element={<Centers/>} />
    </Routes>
  );
};

export default RouterConfig;