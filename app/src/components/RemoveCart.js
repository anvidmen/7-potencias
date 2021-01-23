import React from 'react'

const RemoveCart = ({ clearCart }) => {
  const handleRemoveCart = event => {
    event.preventDefault()

    clearCart()
  }

  return (
    <button className='clear-cart' onClick={handleRemoveCart}>Clear Cart</button>
  )
}

export default RemoveCart
