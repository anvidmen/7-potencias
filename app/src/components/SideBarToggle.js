import React from 'react'

const SideBarToggle = ({ toggleSideBar }) => {
  const sideBarToggleHandler = event => {
    event.preventDefault()

    toggleSideBar()
  }

  return (

    <div className='toggle-button' onClick={sideBarToggleHandler} />
  )
}

export default SideBarToggle
