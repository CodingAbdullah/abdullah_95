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
            console.log(response);
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
        let { createdAt } = profileData.information;
        let { all, win, draw, loss } = profileData.information.count;

        return (
            <div className="card" style={{ borderRadius: "1.5rem", paddingBottom: '2rem' }}>
                <div className="card-body">
                    <div className="row">
                        <h6 className="card-info">Name: { firstName + " " + lastName }</h6>
                    </div>
                    <div className="row">
                        <h6 className="card-info">Location: { location + ", " + country }</h6>
                    </div>
                    <div className="row">
                        <h6 className="card-info">Bio: { bio }</h6>
                    </div>
                    <div className="row">
                        <h6 className="card-info">Create Date: { new Date( createdAt ).toISOString().split("T")[0] + " " + new Date( createdAt ).toISOString().split("T")[1].split("Z")[0] + " - GMT" }</h6>
                    </div>
                    <div className="row">
                        <h6 className="card-info">
                            Links: 
                            <br />
                            {
                                links.replace("\r\n", " ").split(" ").map(link => {
                                    return (
                                        <>
                                            <a style={{ color: 'green' }} href={ "https://" + link } target="_blank" rel="noreferrer">{ link }</a>
                                            <br />
                                        </>
                                    )
                                })
                            }
                        </h6>
                    </div>
                    <div className="row">
                        <h6 className="card-info">Games Played: { all }</h6>
                    </div>
                    <div className="row">
                        <h6 className="card-info">Wins: { win }</h6>
                    </div>
                    <div className="row">
                        <h6 className="card-info">Draws: { draw }</h6>
                    </div>
                    <div className="row">
                        <h6 className="card-info">Losses: { loss }</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard;