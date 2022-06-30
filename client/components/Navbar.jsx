import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
<div className="menu">
        <nav>
          <h1 className="navbar-title">Recall.it</h1>
          <ul>
            <li>
            <Link to="/" className="tabs" id="navlink">Home</Link>
            </li>
            <li>
            <Link to="/Profile/3" className="tabs" id="navlink">Profile</Link>
            </li>
            <li>
            <Link to="/Categories" className="tabs" id="navlink">Categories</Link>
            </li>
            <li>
            <Link to="/Login" className="login-tab" id="login-navlink">Login</Link>
            </li>
          </ul>
        </nav>
      </div> 
    </>
  );
};

export default Navbar;
