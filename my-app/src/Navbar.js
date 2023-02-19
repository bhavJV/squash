import React from "react";
import "./App.css"

function NavBar() {
    return (
        <div>
            <nav>
                <div className = "logo">React nav</div>
                <ul className="nav-links">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Recycle Centers</a></li>
                    <li><a>Squash Bot</a></li>
                    <li><a>Login</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar