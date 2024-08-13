import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import '../Login/Login.css';

const Log = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Login button clicked'); // Debugging

    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Admin credentials for testing
    const adminCredentials = { username: 'admin@gmail.com', password: 'admin123' };

    if (username === adminCredentials.username && password === adminCredentials.password) {
      alert('Admin Login successful!');
      console.log('Navigating to /admin-dashboard'); // Debugging
      navigate('/admin-dashboard'); // Redirect to admin dashboard
    } else if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert('Login successful!');
      console.log('Navigating to /home'); // Debugging
      navigate('/home'); // Redirect to home page after successful login
    } else {
      alert('Invalid username or password.');
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
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <FaUser className='icone' />
          </div>
          <div className='input-box'>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock className='icone' />
          </div>
          <div className='forgot'>
            <Link to="/forget-password">Forgot Password</Link>
          </div>
          <button className='submit' type='submit'>Login</button>
          <div className='register'>
            <p>Don't have an account? <Link to="/signup">Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Log;
