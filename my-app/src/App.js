import React from 'react';
import NavBar from './Navbar/Navbar';
import RouterConfig from './RouterConfig';

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
      </div>
  );
}

export default App;