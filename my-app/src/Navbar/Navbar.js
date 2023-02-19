import React from "react";
import "./Navbar.css"

function NavBar() {
    return (
        <div>
            <nav>
                <div className="logo">Squash</div>
                <ul className="nav-links">
                    <li><a href ="#">Home</a></li>
                    <li><a href ="#">About</a></li>
                    <li><a href = "#">Centers</a></li>
                    <li><a href ="#">Discord</a></li>
                    <li><a href = "#">Login</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar