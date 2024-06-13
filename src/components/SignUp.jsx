// import Google from '../assets/google.png'
import { Link } from 'react-router-dom'
import logo from '../assets/logo (2).png'

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="registration form">
          <div className="flex">
          <Link to='/home'><img src={logo} alt="" /></Link>
            <header className='signuphead'>Get Started with Marigold Kitchen</header>
          </div>
          <form>
            <input type="text" name='username' required placeholder="Enter your name" />
            <input type="email" name="email" required placeholder="Enter your email" />
            <input type="password" name='password' required placeholder="Create your password" />
            <input type="submit" className="button" value="Signup" />
          </form>
          <div className="signup">
            <Link to="/login"><span className="signup">Have an account? <span style={{ textDecoration: 'none', color: '#000' }}>Login</span></span></Link>
          </div>
        </div>
      </div>
    </>
  )
}
