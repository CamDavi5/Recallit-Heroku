import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Appliances() {
  const [applianceArr, setApplianceList] = useState([]);
  const [loadingBool, setLoadingBool] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://www.saferproducts.gov/RestWebServices/Recall?format=json&RecallDescription=appliance"
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((allApps) => {
        setApplianceList(allApps);
        setLoadingBool(true);
      });
  }, []);

  const toDetails = (recallid) => {
    navigate(`/Categories/Appliances/${recallid}`);
  };

  return (
    <>
      {loadingBool == true && (
        <div className="app-page-container">
        <div className="row">
          {applianceArr.map((app) => (
            <div className="col-sm-4" key={app.RecallID}>
              <div className="card mt-2">
                <img
                  className="card-img-top3"
                  src={app.Images.length > 0 ? app.Images[0].URL : undefined}
                  alt="Image Unavailable"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {app.Products.length > 0
                      ? app.Products[0].Name
                      : "Name Unavailable"}
                  </h5>
                  <p className="card-text">Recall Date: {app.RecallDate}</p>
                  <button
                    className="btn btn-info"
                    onClick={() => toDetails(app.RecallID)}
                  >
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
          </div>
      )}
    </>
  );
}

export default Appliances;
