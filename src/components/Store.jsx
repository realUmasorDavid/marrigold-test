import '../index.css'
import Navbar from './StoreNavbar'
// import Food from '../assets/mainmeal.png'
import Dish from '../assets/dish (1).png'
import Drink from '../assets/drink (1).png'
import Snack from '../assets/snack (1).png'
import Card from './Card'
// import { Link } from 'react-router-dom'

export default function Store() {
    return (
        <>
            <Navbar />
            <div className="storeFace">
                <h1>Explore Categories</h1>
                <div className="categories">
                    <div className="cat">
                        <img src={Dish} alt="" />
                        <p>Meals</p>
                    </div>
                    <div className="cat">
                        <img src={Drink} alt="" />
                        <p>Drinks</p>
                    </div>
                    <div className="cat">
                        <img src={Snack} alt="" />
                        <p>Snacks</p>
                    </div>
                </div>
            </div>
            <Card />
        </>
    )
}
