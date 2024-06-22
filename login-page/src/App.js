import React, { useState } from 'react';
import LoginForm from './loginform';
import WelcomeMessage from './WelcomeMessage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <WelcomeMessage username={username} />
      )}
    </div>
  );
};

export default App;

