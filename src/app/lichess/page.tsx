"use client";

import React, { useEffect, useState } from 'react';
import { LichessData } from '../../types/LichessData';

// Custom Lichess page component
const LichessPage = () => {
  const [lichessData, setLichessData] = useState<LichessData | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchLichessData = async () => {
      try {
        const response = await fetch('/api/lichess');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setLichessData(data);
      } 
      catch (error) {
        setIsError(true);
      }
    };

    fetchLichessData();
  }, []);

  // Conditionally render component
  if (isError) {
    return <div>Error: {isError}</div>;
  }
  else if (!lichessData) {
    return <div>Loading...</div>;
  }
  else if (lichessData) {
    return (
        <div className="lichess-section">
            <h1 style={{ paddingTop: '1rem', paddingLeft: '2rem' }} className="lichess-title">Lichess Profile</h1>

            <h2 style={{ paddingLeft: '2rem', paddingTop: '2rem' }} className="bio-title">Account</h2>
            <div className="card" style={{ borderRadius: "1.5rem", paddingLeft: '2rem', paddingTop: '2rem', paddingBottom: '2rem' }}>
                <div className="card-body">
                    <div className="row">
                        <h5 className="card-info">
                        <span className="card-attribute-title">Username: </span>
                        { lichessData.status.id }
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">
                        <span className="card-attribute-title">Status: </span>
                        <span style={{ color: lichessData.status.online ? 'green' : 'red' }}>
                            { lichessData.status.online ? " Online" : " Offline" }
                        </span>
                        </h5>
                    </div>
                </div>
            </div>

            <hr />

            <h2 style={{ paddingLeft: '2rem', paddingTop: '2rem' }} className="bio-title">Statistics</h2>
            <div className="card" style={{ borderRadius: "1.5rem", paddingLeft: '2rem', paddingTop: '2rem', paddingBottom: '2rem' }}>
                <div className="card-body">
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Games Played: </span>
                            { lichessData.account.count.all }
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Wins: </span>
                            { lichessData.account.count.win }
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Draws: </span>
                            { lichessData.account.count.draw }
                        </h5>
                    </div>
                    <div className="row">
                        <h5 className="card-info">
                            <span className="card-attribute-title">Losses: </span>
                            { lichessData.account.count.loss }
                        </h5>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default LichessPage;