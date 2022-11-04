import StatusCard from '../Card/StatusCard.jsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from '../Card/ProfileCard.jsx';
import GameCard from '../Card/GameCard.jsx';

const LichessPage = () => {
    // Incorporating hooks
    const [error, updateError] = useState(null);
    const [isLoaded, updateLoaded] = useState(false);
    const [userData, updateUserData] = useState([]);

    // UseEffect instead of ComponentDidMount() lifecycle method
    useEffect(() => {
      const options = {
        headers : {
            "Authorization" : "Bearer zhgRKXzj7fwRlK8Y"  // Concatenate token value
        }
      };

      // Using axios API library, handle errors here.
      axios.get("https://lichess.org/api/account", options)
      .then((response) => {
        if (response.status === 200){
          updateLoaded(true);
          updateUserData(Array(response.data));
        }
      })
      .catch((err) => {
        updateLoaded(true);
        updateError(err);
      })
    }, []);

    if (error) {
      return <div>Error: {error.message}</div>;
    } 
    else if (!isLoaded) {
      return <div>Loading...</div>;
    } 
    else {
      return (
        <div className="lichess-section">
          <StatusCard username={Object(userData[0]).username} status={Object(userData[0]).online} />
          <ProfileCard information={Object(userData[0]).profile} rate={Object(userData[0]).completionRate} />
          <GameCard data={Object(userData[0]).perfs} />
        </div>
      );
    }
}

export default LichessPage;