import React from 'react';
import StatusCard from '../StatusCard/StatusCard.jsx';
import ProfileCard from '../ProfileCard/ProfileCard.jsx';
import GameCard from '../GameCard/GameCard.jsx';
import HorizontalRule from '../../Components/HorizontalRule/HorizontalRule';
import '../../css/lichess.css';

const LichessPage = () => {

  return (
    <div className="lichess-section">
        <h1 className="lichess-title">Lichess</h1>
        <h4 className="status-title">Profile</h4>
        <StatusCard />
        <HorizontalRule />
        <h4 className="bio-title">Bio</h4>
        <ProfileCard />
        <HorizontalRule />
        <h4 className="bio-title">Games</h4>
        <GameCard />
        <HorizontalRule />
      </div>
  );
}
export default LichessPage;