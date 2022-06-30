import React from 'react';
import "./Navbar.css"
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
		<header class="header">
		<div class="left">
			<a href="#">Recall Navbar</a>
		</div>
  <div class="mid">
		<ul class="navbar">
			 <li>
      <Link to="/Cars">Cars</Link>
    </li>
    <li>
      <Link to="/Appliances">Appliances</Link>
    </li>
    <li>
      <Link to="/Every-day-items">Every Day items</Link>
    </li>
		</ul>
   
  </div>
	<div class="right">
          <a href="#">Welcome</a>
        </div>

    </header>
  );
}
export default Navbar;