import React from 'react'
import './NavBar.sass'
import { Link } from 'react-router-dom'
import CartToggle from './CartToggle'
import CartQuantityIcon from './CartQuantityIcon'
import SideBarToggle from './SideBarToggle'

export default function ({ onLogout, validateUserLogged, toggleHiddenDropdown, cartToggleRef, quantityCart, toggleSideBar }) {
  return (
    <nav className='navbar'>
      <div className='spacer2' />
      <div className='navbar-items'>
        <ul>
          <Link to='home'>Home</Link>
          <Link to='/lessons'>Classes Online</Link>
        </ul>
      </div>
      {validateUserLogged() && (<>
        <div className='checkout-container'>
          <div className='checkout-icon' />
          <button onClick={onLogout}>LOGOUT</button>
        </div>
      </>)}
      <div className='icons-container'>
        {!validateUserLogged() && (<>
          <div className='register-container'>
            <div className='register-icon' />
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
          </div>
        </>)}
        <CartToggle toggleHiddenDropdown={toggleHiddenDropdown} reference={cartToggleRef} />
        <CartQuantityIcon quantity={quantityCart} />
      </div>
      <SideBarToggle toggleSideBar={toggleSideBar} />
    </nav>
  )
}
