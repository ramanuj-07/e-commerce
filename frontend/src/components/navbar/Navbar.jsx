import React from 'react'
import './Navbar.css';
import logo from '../assets/Frontend_Assets/logo.png';
import cart_icon from '../assets/Frontend_Assets/cart_icon.png';

const Navbar = () => {
  return (
      <div className='navbar' >
          <div className='nav-logo' >
              <img src={logo} alt="" />
              <p>SHOPPY</p>
          </div>
          <ul className="nav-menu">
              <li>Shop</li>
              <li>Men</li>
              <li>Women </li>
              <li>Kids</li>
          </ul>
          <div className="nav-login-cart">
              <button>Login</button>
              <img src={cart_icon} alt="" />
          </div>
          
    </div>
  )
}

export default Navbar