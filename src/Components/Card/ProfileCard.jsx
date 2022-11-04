import React from 'react';

const ProfileCard = (props) => {
    const { bio, country, firstName, lastName, location } = props.information;    

    return (
        <div className="card" style={{padding: "1.0rem", borderRadius: "1.5rem"}}>
            <h4>About Me</h4>
            <div className="card-body">
                <div className="row">
                    <h5 className="card-info">First Name: {firstName}</h5>
                </div>
                <div className="row">
                    <h5 className="card-info">Last Name: {lastName}</h5>
                </div>
                <div className="row">
                    <h5 className="card-info">Location: {location}</h5>
                </div>
                <div className="row">
                    <h5 className="card-info">Bio: {bio}</h5>
                </div>
                <div className="row">
                    <h5 className="card-info">Country: {country}</h5>
                </div>
                <div className="row">
                    <h5 className="card-info">Completion Rate: {props.rate}%</h5>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;