import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileCard = () => {
    const [profileData, updateProfileData] = useState({
        information: null
    });

    const [isError, updateIsError] = useState({
        information: null
    });

    // Fetch profile information for bio, games, etc...
    useEffect(() => {
        let options = {
            method: 'GET',
            headers: {
                'content-type' : 'application/json',
                'Authorization' : 'Bearer ' + process.env.REACT_APP_LICHESS_API_KEY
            }
        }

        // Make the API call using the authenticator token
        axios.get("https://lichess.org/api/account", options)
        .then(response => {
            updateProfileData((prevState) => {
                return {
                    ...prevState,
                    information: response.data
                }
            })
        }) 
        .catch(err => {
            updateIsError((prevState) => {
                return {
                    ...prevState,
                    information: err
                }
            });
        });
    }, []);

    if (profileData.information === null) {
        return <div>Loading...</div>
    }
    else if (isError.information !== null) {
        return <div>{ isError.information }</div>
    }
    else {
        // Object destructure for display, date formatting, etc
        let { firstName, lastName, country, location, bio, links } = profileData.information.profile;
        let { completionRate, createdAt } = profileData.information;
        let { all, win, draw, loss } = profileData.information.count;

        return (
            <div className="card" style={{ padding: "1.0rem", borderRadius: "1.5rem" }}>
                <h4>About Me</h4>
                <div className="card-body">
                    <div className="row">
                        <h5 className="card-info">Name: { firstName + " " + lastName }</h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">Location: { country + " : " + location }</h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">Bio: { bio }</h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">Account Create Date: { new Date( createdAt ).toISOString().split("T")[0] + " " + new Date( createdAt ).toISOString().split("T")[1].split("Z")[0] + " - GMT" }</h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">
                            Links:
                            {
                                links.split("\r\n").map(link => {
                                    return (
                                        <span>{" " + link}</span>
                                    )
                                })
                            }
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">Games Played: { all }</h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">Wins: { win }</h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">Draws: { draw }</h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">Losses: { loss }</h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">Completion Rate: { completionRate }%</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard;