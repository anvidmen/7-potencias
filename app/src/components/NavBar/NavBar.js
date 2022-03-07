import React from 'react'
import { Link } from 'react-router-dom'
import CartToggle from '../CartToggle/CartToggle'
import CartQuantityIcon from 'components/CartQuantityIcon/CartQuantityIcon'
import SideBarToggle from 'components/SideBarToggle/SideBarToggle'
import './styles.sass'

const NavBar = ({
  onLogout,
  validateUserLogged,
  toggleHiddenDropdown,
  cartToggleRef,
  quantityCart,
  toggleSideBar
}) => {
  return (
    <header className='toolbar'>
      <nav className='toolbar__navigation'>
        <div className='toolbar__logo' />
        <div className='spacer' />
        <div className='toolbar__navigation-items'>
          <ul>
            <Link to='home'>Home</Link>
            <Link to='/lessons'>Classes Online</Link>
          </ul>
        </div>
        <div className='spacer2' />
        {validateUserLogged() && (
          <>
            <div className='checkout-container'>
              <div className='checkout-icon' />
              <button onClick={onLogout}>LOGOUT</button>
            </div>
          </>)}
        {!validateUserLogged() && (
          <>
            <div className='register-container'>
              <div className='register-icon' />
              <Link to='/register'>Register</Link>
              <Link to='/login'>Login</Link>
            </div>
          </>)}
        <div className='icons-container'>
          <CartToggle toggleHiddenDropdown={toggleHiddenDropdown} reference={cartToggleRef} />
          <CartQuantityIcon quantity={quantityCart} />
        </div>
        <SideBarToggle toggleSideBar={toggleSideBar} />
      </nav>
    </header>
  )
}

export default NavBar
