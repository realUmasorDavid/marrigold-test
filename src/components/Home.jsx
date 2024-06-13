import '../index.css'
import side from '../assets/side.png'
import lcu from '../assets/lcu.jpg'
import bela from '../assets/belarush.jpg'
import side2 from '../assets/temp.png'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import star from '../assets/star.png'

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="left">
          <h6>- Order from ??? Today -</h6>
          <h1>Discover our <br />culinary dishes and <br />delicious, exciting flavours.</h1>
          <Link to="/store"><button className='normal'>Place an order now</button></Link>
          <Link to="/about"><button className='white'>Explore Marigold</button></Link>
        </div>
        <div className="right">
          <img src={side} alt="food" />
        </div>
      </div>
      <div className="ad1">
        <div className="section-1">
          <h3>The #1 Restaurant in Lead City University.</h3>
          <img src={lcu} alt="Lead City University" />
          <img src={bela} alt="Lead City University" />
        </div>
        <div className="contain">
          <div className="left">
            <h1>Introducing <br />Our Tasty Creations.</h1>
            <p>Join our foodie community and enjoy <br />the flavors today!</p>
            <Link to="/store"><button className='normal'>Place an order now</button></Link>
          </div>
          <div className="right">
            <img src={side2} alt="food2" />
          </div>
        </div>
      </div>
      <div className="reviews">
        <h1>Customer Reviews</h1>
        <p>Customers rave about our dishes</p>
        <div className="flex">
          <div className="review">
            <h1>I come to Marigold <br />because of the <br />excellent dishes.</h1>
            <img src={star} alt="" />
            <h4>Fashina Hussein</h4>
            <p>Student, Lead City.</p>
          </div>
          <div className="review">
            <h1>I recommend <br />Marigold to all <br />students.</h1>
            <img src={star} alt="" />
            <h4>Amure Isaac</h4>
            <p>Student, Lead City.</p>
          </div>
          <div className="review">
            <h1>Marigold has <br />redefined my dining <br />experience.</h1>
            <img src={star} alt="" />
            <h4>Fashina Taiwo</h4>
            <p>Student, Lead City.</p>
          </div>
        </div>
      </div>
      <div className="ad1 two">
        <div className="contain">
          <div className="left">
            <h1>Start your <br />Culinary journey.</h1>
            <p>Experience amazing flavours today!</p>
            <Link to="/about"><button className='normal'>Make an order</button></Link>
          </div>
          <div className="right">
            <img src={side2} alt="food2" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
