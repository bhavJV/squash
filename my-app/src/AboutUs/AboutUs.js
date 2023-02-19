import React from 'react';
import NavBar from '../Navbar/Navbar';
import "./AboutUs.css"

function aboutus() {
  return (
    
    <div className="aboutus">
      <div>
      {/* <NavBar /> //this will cause an extra navbar*/} 
      </div>
      
      <div className='aboutus-container'>
        <div className = "thing1">
         Find, sell, earn, redeem, donate, and learn all in one place!
        </div>
        <div className = "thing2">
        Who we are?
        </div>
        <div className = "thing3">
        We want to help you find recycling centers closest to you. Be it soda cans, take-out, plastic bags, bottles, or containers, drop them off at a designated drop-off and obtain points you can redeem or donate!
        </div>
      </div>
    </div>
  );
}

export default aboutus;