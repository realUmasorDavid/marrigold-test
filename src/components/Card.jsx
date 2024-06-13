import '../index.css'
import Food from '../assets/feat5.jpg'
import Star from '../assets/star2.png'
// import { Link } from 'react-router-dom'

export default function Card() {
    return (
        <>

            



            {/* MAIN PAGE  */}
            <div className="contain">
                <div className="card">
                    <div className="main-i">
                        <img src={Food} alt="food"/>
                    </div>
                    <div className="flex">
                        <h1 className="name">Jollof Rice</h1>
                        <div className="flex">
                            <img className='misc' src={Star} alt="rating" />
                            <p>4.75</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="flex no">
                                <h5>₦2000.00</h5>
                            </div>
                            <h6>Meals</h6>
                        </div>
                        <div className="right">
                            <button name='addToCart' className='normal'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card second">
                    <div className="main-i">
                        <img src={Food} alt="food"/>
                    </div>
                    <div className="flex">
                        <h1 className="name">Jollof Rice</h1>
                        <div className="flex">
                            <img className='misc' src={Star} alt="rating" />
                            <p>4.75</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="flex no">
                                <h5>₦2000.00</h5>
                            </div>
                            <h6>Meals</h6>
                        </div>
                        <div className="right">
                            <button name='addToCart' className='normal'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card third">
                    <div className="main-i">
                        <img src={Food} alt="food" />
                    </div>
                    <div className="flex">
                        <h1 className="name">Jollof Rice</h1>
                        <div className="flex">
                            <img className='misc' src={Star} alt="rating" />
                            <p>4.75</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="flex no">
                                <h5>₦2000.00</h5>
                            </div>
                            <h6>Meals</h6>
                        </div>
                        <div className="right">
                            <button name='addToCart' className='normal'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card row2 first">
                    <div className="main-i">
                        <img src={Food} alt="food"/>
                    </div>
                    <div className="flex">
                        <h1 className="name">Jollof Rice</h1>
                        <div className="flex">
                            <img className='misc' src={Star} alt="rating" />
                            <p>4.75</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="flex no">
                                <h5>₦2000.00</h5>
                            </div>
                            <h6>Meals</h6>
                        </div>
                        <div className="right">
                            <button name='addToCart' className='normal'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="card row2 second">
                    <div className="main-i">
                        <img src={Food} alt="food" />
                    </div>
                    <div className="flex">
                        <h1 className="name">Jollof Rice</h1>
                        <div className="flex">
                            <img className='misc' src={Star} alt="rating" />
                            <p>4.75</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <div className="flex no">
                                <h5>₦2000.00</h5>
                            </div>
                            <h6>Meals</h6>
                        </div>
                        <div className="right">
                            <button name='addToCart' className='normal'>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
