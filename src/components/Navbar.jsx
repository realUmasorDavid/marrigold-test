import '../index.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo (2).png'

function move() {
  let mobile_nav = document.getElementById("mobile-nav")
  let hamburger = document.getElementById("hamburger")
  let navbar = document.getElementById("navbar")

  hamburger.classList.toggle('is-active');
  mobile_nav.classList.toggle('is-active');

  if (hamburger.classList.contains('is-active')) {
    navbar.style.position = "sticky"
    navbar.style.top = "0"
  } 
  else {
    navbar.style.position = "initial"
    navbar.style.top = "initial"
  }
}




function Navbar() {
  return (
    <>
      <div className="navbar" id='navbar'>
        <Link to="/home"><img src={logo} alt="" /></Link>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/order">Make an Order</Link></li>
        </ul>
        <div className="mobile-nav" id="mobile-nav">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/store">Make an Order</Link></li>
        </div>
        <button onClick={move} className="hamburger" id="hamburger">
          <div className="bar"></div>
        </button>
      </div>
    </>
  )
}

export default Navbar