import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="absolute"></div>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h5>Services</h5>
                <ul>
                  <li>
                    <Link to="/Categories/Ford" className="footer-link">Ford</Link>
                  </li>
                  <li>
                    <Link to="/Categories/Honda" className="footer-link">Honda</Link>
                  </li>
                  <li>
                    <Link to="/Categories/Mercedes" className="footer-link">Mercedes</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h5>About</h5>
                <ul>
                  <li>
                    <Link to="/Contactus" className="footer-link2">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/Team" className="footer-link2">Team</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h5>Recall.it</h5>
                <p>
                  Discover any recalled items that you might have and replace them quick and easy!
                </p>
              </div>
              <p className="copyright">Recall.it © 2022</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
