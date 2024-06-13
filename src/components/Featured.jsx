import '../index.css'
import Feat from '../assets/feat.jpg'
import { Link } from 'react-router-dom'

export default function Featured() {
    return (
        <>
            <div className="featured">
                <div className="f1">
                    <h2>Featured Dish</h2>
                    <img src={Feat} alt="" />
                    <p>Jollof, plantain and sausage.</p>
                    <p>$100.00</p>
                    <Link to="/order"><button className='normal'>Order Now</button></Link>
                    <p>Available now</p>
                </div>
                <div className="right">
                    <div className="part2">
                        <div className="f2">
                            <img src={Feat} alt="" />
                            <div className="flexpart">
                                <p>Jollof, plantain and sausage.</p>
                                <p>$100.00</p>
                                <Link to="/order"><button className='normal'>Order Now</button></Link>
                                <p>Available now</p>
                            </div>
                        </div>
                    </div>
                    <div className="part2">
                        <div className="f2">
                            <img src={Feat} alt="" />
                            <div className="flexpart">
                                <p>Jollof, plantain and sausage.</p>
                                <p>$100.00</p>
                                <Link to="/order"><button className='normal'>Order Now</button></Link>
                                <p>Available now</p>
                            </div>
                        </div>
                    </div>
                    <div className="part2">
                        <div className="f2">
                            <img src={Feat} alt="" />
                            <div className="flexpart">
                                <p>Jollof, plantain and sausage.</p>
                                <p>$100.00</p>
                                <Link to="/order"><button className='normal'>Order Now</button></Link>
                                <p>Available now</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
