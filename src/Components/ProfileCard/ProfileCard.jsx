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

        // Format titles and add the values into the following JSX
        return (
            <div className="card" style={{ borderRadius: "1.5rem", paddingBottom: '2rem' }}>
                <div className="card-body">
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Name: </span>
                            { firstName + " " + lastName }
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Location: </span>
                            { location + ", " + country }
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Bio: </span>
                            { bio }
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Create Date: </span> 
                            { new Date( createdAt ).toISOString().split("T")[0] + " " + new Date( createdAt ).toISOString().split("T")[1].split("Z")[0] + " - GMT" }
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Links: </span>
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
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Games Played: </span>
                            { all }
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Wins: </span>
                            { win }
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Draws: </span> 
                            { draw }
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Losses: </span>
                            { loss }
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard;