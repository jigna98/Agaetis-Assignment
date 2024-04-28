import React, { useState } from 'react';
import '../Css/LoginForm.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      navigate('/admin'); 
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="login-header">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label>
            <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} /> Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
        <label>
            <FontAwesomeIcon icon={faLock} style={{ marginRight: '5px' }} /> Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className="login-button-container mt-2">
          <button type="submit" className="submit-button">Login Now</button>
      </div>
      </form>
    </div>
  );
};

export default LoginForm;
