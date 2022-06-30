import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'babel-polyfill';

function Honda() {
    const [hondaArr, setHondaList] = useState([]);
    const [loadingBool, setLoadingBool] = useState(false);

    const navigate = useNavigate();

    const hondaStatic = [{
        Component: "POWER TRAIN:DRIVELINE:DRIVESHAFT",
        NHTSACampaignNumber: "21V986000",
        ReportReceivedDate: "16/12/2021"
    }];

    useEffect(() => {
          
        fetch('/api/ahh/honda1')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(hondas => {
                setHondaList(hondas);
            });

        fetch('/api/ahh/honda2')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(hondas => {
                setHondaList(...hondaArr, hondas);
            });

        fetch('/api/ahh/honda3')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(hondas => {
                setHondaList(...hondaArr, hondas);
                setLoadingBool(true);
            });
    }, []);

    const toDetails = (recallid) => {
        navigate(`/Categories/Honda/${recallid}`);
    }

    return (
        <>
            {loadingBool == true &&
             <div className="app-page-container">
                <div className="row">
                {hondaArr.results.map((honda) => (
                    <div className="col-sm-4" key={honda.NHTSACampaignNumber}>
                        <div className="card mt-2">
                        <img className="card-img-top" src='../assets/honda-logo.jpg' alt="Image Unavailable" />
                            <div className="card-body">
                                <h5 className="card-title">{honda.Component}</h5>
                                <p className="card-text">Recall Date: {honda.ReportReceivedDate}</p>
                                <button className="btn btn-info" onClick={() => toDetails(honda.NHTSACampaignNumber)} >See Details</button>
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

export default Honda;