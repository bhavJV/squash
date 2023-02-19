import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './App';
//import About from './About';
import Centers from './Map/Map';
//import Discord from './Discord';
//import Login from './Login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route path="/centers" component={Centers} />
    </Switch>
  );
};

export default Routes;