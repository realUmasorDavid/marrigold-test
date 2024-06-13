/* eslint-disable react/no-unescaped-entities */
// import Google from '../assets/google.png'
import { Link } from 'react-router-dom'
import logo from '../assets/logo (2).png'

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="login form">
          <div className="flex">
            <Link to='/home'><img src={logo} alt="" /></Link>
            <header className='signuphead'>Get Started with Marigold Kitchen</header>
          </div>
          <form>
            <input type="text" name='email' required placeholder="Enter your email" />
            <input type="password" name='password' required placeholder="Enter your password" />
            <input type="submit" className="button" value="Login" />
          </form>
          <div className="signup">
            <Link to="/signup"><span className="signup">Don't have an account? <span style={{ textDecoration: 'none', color: '#000' }}>Signup</span></span></Link>
          </div>
        </div>
      </div>
    </>
  )
}
