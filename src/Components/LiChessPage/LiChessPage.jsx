import React from 'react';
import StatusCard from '../StatusCard/StatusCard.jsx';
import ProfileCard from '../ProfileCard/ProfileCard.jsx';
import GameCard from '../GameCard/GameCard.jsx';

const LichessPage = () => {

  return (
    <div className="lichess-section">
      <StatusCard />
      <ProfileCard />
      <GameCard />
    </div>
  );
}
export default LichessPage;