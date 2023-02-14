import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GameCard = () => {
    const [gameData, updateGameData] = useState({
        information: null
    });

    const [isError, updateError] = useState({
        information: null
    });

    useEffect(() => {
        // Set options for gathering account information
        let options = {
            method: 'GET',
            headers: {
                'content-type' : 'application/json',
                'Authorization' : 'Bearer ' + process.env.REACT_APP_LICHESS_API_KEY
            }
        }
        
        // Make API call
        axios.get('https://lichess.org/api/account', options)
        .then(response => {
            updateGameData((prevState) => {
                return {
                    ...prevState,
                    information: response.data
                }
            });
        })
        .catch(err => {
            updateError((prevState) => {
                return {
                    ...prevState,
                    information: err
                }
            })
        });
    }, [])

    if (gameData.information === null) {
        return <div>Loading...</div>
    }
    else if (isError.information !== null){
        return <div>{ isError.information }</div>
    }
    else {
        // Get the game type keys and iterate to find/display those set of games that were played
        let keys = Object.keys(gameData.information.perfs);
        let gameTypeList = [];

        for (var i = 0; i < keys.length; i++) {
            if ( gameData.information.perfs[keys[i]].games === 0 ) {
                continue; // Game type was not played, hence it will not be displayed
            }
            else {
                // Set a name property for the game type 
                gameData.information.perfs[keys[i]].name = keys[i];
                gameTypeList.push(gameData.information.perfs[keys[i]]);
            }
        }

        return (
            <div className="game-record-section">
                {  
                    gameTypeList.map(gameType => {
                        return (
                            <div className='card' style={{ marginBottom: '2rem', borderRadius: "1.5rem", paddingBottom: '2rem' }}>
                                <div className="card-body">
                                    <div className="row">
                                        <h5 className="card-info">
                                            <span className="card-attribute-title">Type: </span> 
                                            { gameType.name.charAt(0).toUpperCase() + gameType.name.substring(1).toLowerCase() }
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-info">
                                            <span className="card-attribute-title">Games: </span> 
                                                { gameType.games }
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-info">
                                            <span className="card-attribute-title">Rating: </span> 
                                            { gameType.rating }
                                        </h5>
                                    </div>
                                    <div className="row">
                                        <h5 className="card-info">
                                            <span className="card-attribute-title">Progression: </span>
                                            <span className="card-info" style={{ color: gameType.prog < 0 ? "red" : "green" }}> { " " + gameType.prog >= 0 ? ( " +" + gameType.prog ): ( " " + gameType.prog ) } </span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                )}  
            </div>
        )
    }
}

export default GameCard;