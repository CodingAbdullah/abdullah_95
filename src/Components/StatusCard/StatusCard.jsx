import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../css/statuscard.css';

const StatusCard = () => {
    // Make a separate API call to fetch user status informatio
    const [statusData, updateStatusData] = useState({
        information: null
    });

    const [isError, updateisError] = useState({
        information: null
    });

    useEffect(() => {
        // Gather status information from updated Lichess API
        axios.get("https://lichess.org/api/users/status?ids=" + process.env.LICHESS_ACCOUNT)
        .then(response => {
            updateStatusData((prevState) => {
                return {
                    ...prevState,
                    information: response.data[0]
                }
            });
        })
        .catch((err) => {
            // Error exists..
            updateisError((prevState =>{
                return {
                    ...prevState,
                    information: err
                }
            }));
        });
    }, [])

    // Conditional Rendering..
    if (statusData.information === null) {
        return <div>Loading..</div>
    }
    else if (isError.information !== null) {
        return <div>{ isError.information }</div>
    }
    // Once the status data uploads, populate the JSX with information
    else {
        return (
            <div className="card" style={{ borderRadius: "1.5rem", paddingBottom: '2rem' }}>
                <div className="card-body">
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Username: </span> 
                            { statusData.information.id }
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Status: </span>
                            <span style={{ color: statusData.information.online === true ? 'green' : 'red' }}>
                                { statusData.information.online === true ? " Online" : " Offline" }
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default StatusCard;