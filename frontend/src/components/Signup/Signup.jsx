import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail, MdOutlinePhoneAndroid } from "react-icons/md";
import '../Signup/Signup.css';

const Sign = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    console.log('Sign Up button clicked'); // Debugging

    // Store user data in local storage
    const user = { email, phone, username, password };
    localStorage.setItem('user', JSON.stringify(user));

    alert('Sign up successful! You can now log in.');
    console.log('Navigating to /login'); // Debugging
    navigate('/login'); // Redirect to login page after sign up
  };

  return (
    <div className='body'>
      <div className='container'>
        <form onSubmit={handleSignUp}>
          <h1>Sign Up</h1>
          <div className='input-box'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MdEmail className='icone' />
          </div>
          <div className='input-box'>
            <input
              type='tel'
              placeholder='Phone Number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <MdOutlinePhoneAndroid className='icone' />
          </div>
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
          <button className='submit' type='submit'>Sign Up</button>
          <div className='register'>
            <p>Already have an account? <a href='/login'>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
