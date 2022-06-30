import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'babel-polyfill';

function Mercedes() {
    const [mercedesArr, setMercedesList] = useState([]);
    const [loadingBool, setLoadingBool] = useState(false);

    const navigate = useNavigate();

    const mercedesStatic = [{
        Component: "POWER TRAIN:DRIVELINE:DRIVESHAFT",
        NHTSACampaignNumber: "21V986000",
        ReportReceivedDate: "16/12/2021"
    }];

    useEffect(() => {
          
        fetch('/api/ahh/mercedes1')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(mercedess => {
                setMercedesList(mercedess);
            });

        fetch('/api/ahh/mercedes2')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(mercedess => {
                setMercedesList(...mercedesArr, mercedess);
                setLoadingBool(true);
            });
    }, []);

    const toDetails = (recallid) => {
        navigate(`/Categories/Mercedes/${recallid}`);
    }

    return (
        <>
            {loadingBool == true &&
            <div className="app-page-container">
                <div className="row">
                {mercedesArr.results.map((mercedes) => (
                    <div className="col-sm-4" key={mercedes.NHTSACampaignNumber}>
                        <div className="card mt-2">
                        <img className="card-img-top3" src='../assets/merc-logo.png' alt="Image Unavailable" />
                            <div className="card-body">
                                <h5 className="card-title">{mercedes.Component}</h5>
                                <p className="card-text">Recall Date: {mercedes.ReportReceivedDate}</p>
                                <button className="btn btn-info" onClick={() => toDetails(mercedes.NHTSACampaignNumber)} >See Details</button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            }
        </>
    );
};

export default Mercedes;