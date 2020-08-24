import React from 'react'
import './SideBar.sass'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <nav className='sidebar'>
      <ul>
        <li><Link to='home'>Home</Link></li>
        <li><Link to='/lessons'>Classes Online</Link></li>
        <div />
      </ul>
    </nav>
  )
}
