/* eslint-disable react/no-unescaped-entities */
// import Google from '../assets/google.png'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo (2).png'
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    
    if (username === 'admin' && password === '1234') {
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <div className="container">
        <div className="login form">
          <div className="flex">
            <Link to='/home'><img src={logo} alt="" /></Link>
            <header className='signuphead'>Get Started with Marigold Kitchen</header>
          </div>
          <form>
            <input id='userid' type="text" required placeholder="Enter your email" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input id='password' type="password" required placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}  />
            <input id='submit' type="submit" onClick={handleLogin} />
          </form>
          <div className="signup">
            <Link to="/signup"><span className="signup">Don't have an account? <span style={{ textDecoration: 'none', color: '#000' }}>Signup</span></span></Link>
          </div>
        </div>
      </div>
    </>
  )
}
