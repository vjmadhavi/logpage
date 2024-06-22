import React from 'react';
import './styles.css';

const WelcomeMessage = ({ username }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
    </div>
  );
};

export default WelcomeMessage;
