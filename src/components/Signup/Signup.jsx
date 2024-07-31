import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser , FaLock } from "react-icons/fa";
import { MdEmail , MdOutlinePhoneAndroid } from "react-icons/md";

import '../Signup/Signup.css';

const Sign = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username: ${username}');
    console.log('Password: ${password}');
  };

  return (
    <div className='body'>
    <div className='container'>
        <form>
            <h1>Sign In</h1>
            <div className='input-box'>
                <input type='email' placeholder='Email' required/>
                <MdEmail className='icone'/>
            </div>
            <div className='input-box'>
                <input type='phone' placeholder='Number' required/>
                <MdOutlinePhoneAndroid className='icone'/>
            </div>
            <div className='input-box'>
                <input type='text' placeholder='Username' required/>
                <FaUser className='icone'/>
            </div>
            <div className='input-box'>
                <input type='Password' placeholder='Password' required/>
                <FaLock className='icone'/>
            </div>
            <div className='forgot'>
                <label><input type='checkbox'/>Remember me</label>
            </div>
            <button className='submit'>Sign In</button>
            <div className='register'>
            <p>Already have an account? <a href='/'>Login</a></p>
            </div>
        </form>
    </div>
    </div>
  );
};

export default Sign;