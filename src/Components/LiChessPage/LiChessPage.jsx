import React from 'react';
import StatusCard from '../StatusCard/StatusCard.jsx';
import ProfileCard from '../ProfileCard/ProfileCard.jsx';
import GameCard from '../GameCard/GameCard.jsx';
import HorizontalRule from '../../Components/HorizontalRule/HorizontalRule';
import '../../css/lichess.css';

const LichessPage = () => {

  // Adding in horizontal rules and titles for display
  return (
    <div className="lichess-section">
        <h1 className="lichess-title">Lichess Profile</h1>
        <h2 className="status-title">Account</h2>
        <StatusCard />
        <HorizontalRule />
        <h2 className="bio-title">Bio</h2>
        <ProfileCard />
        <HorizontalRule />
        <h2 className="bio-title">Games</h2>
        <GameCard />
        <HorizontalRule />
    </div>
  );
}

export default LichessPage;