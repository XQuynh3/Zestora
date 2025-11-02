import { Link } from 'react-router-dom'
import React, { useState, useContext, useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import carticon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = () => {
    menuRef.current.classList.toggle("nav_menu_visible");
    e.targer.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className="nav_logo">
        <img src={logo} alt="logo" />
        <p>Zestora</p>
      </div>

      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="nav_dropdown"/>
      <ul ref = {menuRef} className="nav_menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
          {menu == "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
          {menu == "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>
          {menu == "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>
          {menu == "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={carticon} alt="carticon" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
