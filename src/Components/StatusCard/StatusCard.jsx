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
        axios.get("https://lichess.org/api/users/status?ids=maplesweet95")
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
            <div className="card" style={{ padding: "1.0rem", borderRadius: "1.5rem" }}>
                <h4>Profile</h4>
                <div className="card-body">
                    <div className="row">
                        <h6 className="card-info">Username: { statusData.information.id }</h6>
                    </div>
                    <div className="row">
                        <h6 className="card-info">Status: 
                            <span style={{ color: statusData.information.online === true ? 'green' : 'red' }}>
                                { statusData.information.online === true ? " Online" : " Offline" }
                            </span>
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default StatusCard;