import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <>
      <div className="cat-container">
        <div className="row1">
          <div className="col-6 text-center">
            <div className="card">
              <img src="../assets/fordtrucks.jpg" className="card-img-top2"></img>
              <div className="card-body">
                <h5 className="card-title">Ford Vehicles</h5>
                <p className="card-text">
                  Find Ford Recalled Parts
                </p>
                <Link to="/Categories/Ford" className="btn btn-outline-danger">
                  More Info
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6 text-center">
            <div className="card">
              <img src="../assets/merc.jpg" className="card-img-top2"></img>
              <div className="card-body">
                <h5 className="card-title">Mercedes Vehicles</h5>
                <p className="card-text">
                Find Mercedes Recalled Parts
                </p>
                <Link to="/Categories/Mercedes" className="btn btn-outline-danger">
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row1">
          <div className="col-6 text-center">
            <div className="card">
              <img src="../assets/honda.webp" className="card-img-top2"></img>
              <div className="card-body">
                <h5 className="card-title">Honda Vehicles</h5>
                <p className="card-text">
                Find Honda Recalled Parts
                </p>
                <Link to="/Categories/Honda" className="btn btn-outline-danger">
                  More Info
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6 text-center">
            <div className="card">
              <img src="../assets/appphoto.jpg" className="card-img-top2"></img>
              <div className="card-body">
                <h5 className="card-title">Home Appliances & Everyday Items</h5>
                <p className="card-text">
                  Find Recalled Home Appliances & Everyday Items
                </p>
                <Link to="/Categories/Appliances" className="btn btn-outline-danger">
                  More Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
