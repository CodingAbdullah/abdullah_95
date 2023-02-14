import StatusCard from '../StatusCard/StatusCard.jsx';
import ProfileCard from '../ProfileCard/ProfileCard.jsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
            "Authorization" : "Bearer "  + process.env.REACT_APP_LICHESS_API_KEY  // Concatenate token value
        }
      };

      // Using axios API library, handle errors here.
      axios.get("https://lichess.org/api/account", options)
      .then((response) => {
        console.log(response);
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
          <StatusCard />
          <ProfileCard />
          <GameCard data={Object(userData[0]).perfs} />
        </div>
      );
    }
}

export default LichessPage;