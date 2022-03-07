import React from 'react'
import { Link } from 'react-router-dom'
import CartToggle from 'components/CartToggle/CartToggle'
import './styles.sass'

const SideBar = ({
  onLogout,
  validateUserLogged,
  toggleHiddenDropdown,
  cartToggleRef
}) => {
  return (
    <nav className='sidebar'>
      <ul>
        <li className='cart'>
          <CartToggle toggleHiddenDropdown={toggleHiddenDropdown} reference={cartToggleRef} />
        </li>
        <div className='sidebar-separator' />
        {validateUserLogged() && (
          <>
            <li className='logout'><button onClick={onLogout}>Logout</button></li>
          </>)}
        {!validateUserLogged() && (
          <>
            <li className='register'><Link to='/register'>Register</Link></li>
            <li className='login'><Link to='/login'>Login</Link></li>
          </>)}
        <div className='sidebar-separator' />
        <li><Link to='home'>Home</Link></li>
        <li><Link to='/lessons'>Classes Online</Link></li>
        <div />
      </ul>
    </nav>
  )
}

export default SideBar
