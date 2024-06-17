import '../index.css'
import logo from '../assets/logo (2).png'
import cart from '../assets/icon.png'
import Food from '../assets/feat5.jpg'
import profile from '../assets/user.png'
import { Link } from 'react-router-dom'

function openCart() {
    let cart_button = document.getElementById("cart_button")
    let cart_page = document.getElementById("cart_page")
    // let container = document.querySelector("body")
    let cartWidth = window.innerWidth
    let cartHeight = window.innerHeight


    function handleClick() {

        if (window.innerWidth < 415 && cart_page.style.right != '0%') {
            cart_page.style.width = cartWidth+1 + 'px'
            cart_page.style.height = cartHeight + 'px'
                cart_page.style.right = '0%';
            
        } else if (cart_page.style.right != '0%') {
            cart_page.style.right = '0%';
        }

        else {
            cart_page.style.right = '-125%';
        }
        console.log("Finished!")

    }

    if (cart_button && cart_page) {
        cart_button.addEventListener('click', handleClick)
    }

    // if (window.innerWidth <= 415 && cart_page.style.right == '-125%') {
    //     cart_page.style.width = cartWidth + 'px'
    //     cart_page.style.height = cartHeight + 'px'
    //     cart_page.style.right = '0%';
    //     container.style.transform = 'translateX(-400px)';
    // } else {
    //     cart_page.style.right = '-125%';
    //     container.style.transform = 'translateX(0)';
    // }
}

function closeCart() {
    let cart_page = document.getElementById("cart_page")

    cart_page.style.right = "-125%"
}

export default function StoreNavbar() {
    return (
        <>
            <div className="storeHead">
                <div className="head">
                    <div className="left logo">
                        <Link to="/home"><img src={logo} alt="logo" /></Link>
                    </div>
                    <div className="center">
                        <input type="search" name="search" id="search" placeholder='Search Marrigold' />
                    </div>
                    <div className="right">
                        <button name='cart' onClick={openCart}><img src={cart} id='cart_button' alt="cart" /></button>
                        <div className="profile">
                        <Link to="/login"><img src={profile} alt="profile" /></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* CART SLIDE  */}
            <div className="cart" id='cart_page'>
                <h2>Cart</h2>
                <div className="listCart">
                    <div className="itemcart">

                        <img src={Food} alt="food" />
                        <div className="content">
                            <div className="name">Product Name</div>
                            <div className="price">₦2000/1 product</div>
                        </div>
                        <div className="quantity">
                            <button name='reduce'>-</button>
                            <span className="value">3</span>
                            <button name='subtract'>+</button>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <div className="close" id='close' onClick={closeCart}>CLOSE</div>
                    <div className="checkout"><Link href="">CHECKOUT</Link></div>
                </div>
            </div>
        </>
    )
}
