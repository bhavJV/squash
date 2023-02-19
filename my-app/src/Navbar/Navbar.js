import React from "react";
import "./Navbar.css"
import {Link, NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <nav>
                <div className="logo">Squash</div>
                <ul className="nav-links">
                    <li>
                    <NavLink exact to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about">About</NavLink>                    
                    </li>
                    <li>
                    <NavLink to="/centers">Centers</NavLink>
                    </li>
                    <li>
                    <NavLink to="/discord">Discord</NavLink>
                    </li>
                    <li>
                    <NavLink to="/login">Login</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar