import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'babel-polyfill';

function Ford() {
    const [fordArr, setFordList] = useState([]);
    const [loadingBool, setLoadingBool] = useState(false);

    const navigate = useNavigate();

    const fordStatic = [{
        Component: "POWER TRAIN:DRIVELINE:DRIVESHAFT",
        NHTSACampaignNumber: "21V986000",
        ReportReceivedDate: "16/12/2021"
    }];

    useEffect(() => {
          
        fetch('/api/ahh/ford')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(fords => {
                setFordList(fords);
                setLoadingBool(true);
            });
    }, []);

    const toDetails = (recallid) => {
        navigate(`/Categories/Ford/${recallid}`);
    }

    return (
        <>
            {loadingBool == true &&
             <div className="app-page-container">
                <div className="row">
                {fordArr.results.map((ford) => (
                    <div className="col-sm-4" key={ford.NHTSACampaignNumber}>
                        <div className="card mt-2">
                        <img className="card-img-top3" src='../assets/fordlogo.webp' alt="Image Unavailable" />
                            <div className="card-body">
                                <h5 className="card-title">{ford.Component}</h5>
                                <p className="card-text">Recall Date: {ford.ReportReceivedDate}</p>
                                <button className="btn btn-info" onClick={() => toDetails(ford.NHTSACampaignNumber)} >See Details</button>
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

export default Ford;