import '../index.css'
import Navbar from '../components/Navbar.jsx'
import { Link } from 'react-router-dom'
import view from '../assets/view.jpg'

export default function Home() {
    return (
        <>
            <div className="about">
                <Navbar />
                <div className="about-flex">
                    <div className="about-container">
                        <h1>Marrigold <br />Kitchen</h1>
                        <h2>Discover the secret <br />behind our signature dishes.</h2>
                        <hr />
                        <Link to='/home'><button className='normal'>Read more</button></Link>
                    </div>
                    <div className="about-img">
                        <img src={view} alt="view" />
                    </div>
                </div>
            </div>

        </>
    )
}
