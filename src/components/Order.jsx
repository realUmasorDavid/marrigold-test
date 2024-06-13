import '../index.css'
import Navbar from './OrderNavbar'
import Feat from '../assets/feat.jpg'


export default function Order() {
  return (
    <>
        <Navbar/>
        <div className="order">
            <h1>Place your Order</h1>
            <p>We enjoy serving you... <br />Add Items to cart and checkout</p>
        </div>
        <div className="store">
            <div className="category">
                <div className="flex">
                    <button>Main meal</button>
                    <button>Drinks</button>
                    <button>Sides</button>
                    <button>Proteins</button>
                </div>
            </div>
            <div className="items">
            <div className="item">
                    <img src={Feat} alt="" />
                    <h1>Jollof Rice</h1>
                    <p>$100.00</p>
                    <button>Add to cart</button>
                </div>
                <div className="item">
                    <img src={Feat} alt="" />
                    <h1>Jollof Rice</h1>
                    <p>$100.00</p>
                    <button>Add to cart</button>
                </div>
                <div className="item">
                    <img src={Feat} alt="" />
                    <h1>Jollof Rice</h1>
                    <p>$100.00</p>
                    <button>Add to cart</button>
                </div>
                <div className="item">
                    <img src={Feat} alt="" />
                    <h1>Jollof Rice</h1>
                    <p>$100.00</p>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    </>
  )
}
