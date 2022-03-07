import React from 'react'
import RemoveCart from 'views/Checkout/RemoveCart'
import CartItems from 'views/Checkout/CartItems'
import { Link } from 'react-router-dom'
import './styles.sass'

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
        {cart.length > 0 && <RemoveCart clearCart={removeCart} /> }
      </div>

    </section>
  )
}

export default CartDropdown
