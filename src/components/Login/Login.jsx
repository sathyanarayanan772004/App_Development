import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import '../Login/Login.css';

const Log = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin@gmail.com' && password === 'admin123') {
      navigate('/admin-dashboard'); // Redirect to admin dashboard
    } else {
      console.log('Invalid login credentials');
      // Handle invalid credentials (e.g., show an error message)
    }
  };

  return (
    <div className='body'>
      <div className='container'>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className='input-box'>
            <input
              type='text'
              placeholder='email'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className='icone'/>
          </div>
          <div className='input-box'>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className='icone'/>
          </div>
          <div className='forgot'>
            <a href='#'>Forgot Password</a>
          </div>
          <button className='submit'  type='submit'>Login</button>
          <div className='register'>
            <p>Don't have an account? <a href='/signup'>Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Log;
