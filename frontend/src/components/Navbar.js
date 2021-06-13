import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom'
const Navbar = () => { 
    return ( 
        //semantic html
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <h2>InfiniteCommerce</h2>
            </div>
            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link"> 
                        {/* Icon */}
                        <i className="fas fa-shopping-cart"></i>
                        <span>Cart
                        <span className="cartlogo__badge">0</span>
                        </span>
                        
                    </Link>
                </li>
                <li>
                    <Link to="/products"> 
                        
                        Shop
                        
                    </Link>
                </li>
                
            </ul>
            {/* hamburger menu */}
            <div className="hamburger__menu">
                        <div></div>
                        <div></div>
                        <div></div>
            </div>
        </nav>
    )
}

export default Navbar;