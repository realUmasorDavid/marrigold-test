import '../index.css'
import { Link } from 'react-router-dom'
import Cart from '../assets/icon.png'

function Navbar() {
  return (
    <>
        <div className="navbar">
            <h1>About ???.</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/order">Make an Order</Link></li>
                <div className="cartpic">
                    <img src={Cart} alt="cart" />
                    <div className="totalQuantity">0</div>
                </div>
            </ul>
        </div>
    </>
  )
}

export default Navbar