import React from "react";

const Team = () => {
  return (
    <>
      <div className="team-container">
        <h1 className="team-title">Meet Our Team </h1>
        <div className="first-row">
          <div className="col-4 text-center">
            <div className="card">
              <img src="../assets/C.JPG" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Cameron Davis</h5>
                <p className="card-text">Worked with our database and functionality of the App.</p>
                <p className="card-text text-muted">Backend</p>
                <img src="../assets/emailicon.png" id="icon" alt="" />
              </div>
            </div>
          </div>
          <div className="col-4 text-center">
            <div className="card">
              <img src="../assets/N.JPG" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Nathan Harris</h5>
                <p className="card-text">Built our items detail page.</p>
                <p className="card-text text-muted">Frontend</p>
                <img src="../assets/emailicon.png" id="icon" alt="" />
              </div>
            </div>
          </div>
          <div className="col-4 text-center">
            <div className="card">
              <img src="../assets/S.JPG" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Sophie Engobor</h5>
                <p className="card-text">Managed the UX Design and built the home, profile, and login page. </p>
                <p className="card-text text-muted">Frontend</p>
                 <img src="../assets/emailicon.png" id="icon" alt="" />
              </div>
            </div>
          </div>
          <div className="col-4 text-center">
            <div className="card">
              <img src="../assets/T.JPG" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Theodore Harris</h5>
                <p className="card-text">Built our categories page.</p>
                <p className="card-text text-muted">Frontend</p>
                <img src="../assets/emailicon.png" id="icon" alt="" />
              </div>
            </div>
          </div>
          <div className="col-4 text-center">
            <div className="card">
              <img src="../assets/Q.JPG" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Quinton Parks</h5>
                <p className="card-text">Mainly worked with our database and added special features in the App.</p>
                <p className="card-text text-muted">Backend</p>
                <img src="../assets/emailicon.png" id="icon" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Team;
