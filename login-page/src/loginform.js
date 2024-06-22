import React, { useState } from 'react';
import './styles.css';

const LoginForm = ({ onLogin }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform dummy validation (accept any credentials for demo purposes)
    if (username !== '' && password !== '') {
      setLoggedIn(true);
      onLogin(username); // Notify parent component about successful login
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
