import React from 'react'
import './styles.sass'

const Footer = () => {
  return (
    <footer>
      <section className='footer'>
        <div className='footer__info' />
        <div className='footer__table' />
        <p className='text'>contact</p>
      </section>
      <section className='copyright'>
        Copyright ©2020 Juan Omen
      </section>
    </footer>
  )
}

export default Footer
