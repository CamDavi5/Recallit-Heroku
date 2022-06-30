import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contactus() {
  return (
    <>
      <div className="relative">
        <div className="contact-page-container">
          <h1 className="text-center">Get in touch</h1>
          <h5 className="addy text-center ">Address</h5>
          <p className="words text-center">
            1500 1st Ave N, Birmingham, AL 35203
          </p>
          <p className="words2  text-center">
            Call us at: <span>(205) 649-0496</span>
          </p>
        </div>
        <div className="btn-container">
          <Link
            to="/"
            type="submit"
            value="Submit"
            className="btn btn-outline-danger btn-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default Contactus;
