import React from 'react'
import './CartDropdown.sass'
import RemoveCart from './RemoveCart'
import CartItems from './CartItems'
import { Link } from 'react-router-dom'

const CartDropdown = ({ reference, cart, removeCart }) => {
  return (
    <section className='cart-dropdown' ref={reference}>
      <CartItems cart={cart} />
      <div className='button-items'>
        {
          cart.length === 0
            ? <Link disabled className='checkout-button' to='/' onClick={(event) => event.preventDefault()}>Go to Check Out</Link>
            : <Link className='checkout-button' to='/checkout'>Check Out</Link>
        }
        <RemoveCart clearCart={removeCart} />
      </div>

    </section>
  )
}

export default CartDropdown
