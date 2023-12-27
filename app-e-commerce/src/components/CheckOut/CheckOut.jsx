import React, { useContext } from 'react'
import { cartContext } from '../../context/cartContext'

const CheckOut = () => {
    const {cartList}= useContext(cartContext)

  return (
    <div>CheckOut</div>
  )
}

export default CheckOut