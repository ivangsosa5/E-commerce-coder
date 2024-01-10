import React, { useContext, useState } from 'react'
import { cartContext } from '../../context/cartContext'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'

const CheckOut = () => {

    const {cartList, subTotal, cartCount}= useContext(cartContext)

  return (
    <>
      <ul>
        {cartList.map(product =>
          <li key={product.id}>
            {product.name}
            <br />
            Precio: {product.price}
            <br />
            Cantidad: {product.quantity}
            <br />
            <br />
          </li>)}        
      </ul>
        <h4 hidden={cartCount <1?'none':''}>Sub Total= {subTotal}</h4>
        <h4 hidden={cartCount <1?'':'none'}>Aún no agregaste nada al carrito</h4>
        <Button variant='primary' hidden={cartCount <1?'none':''}>Pagar</Button>
        <br />
        <br />
        <Button as={Link} to={'/'} variant='dark'>{cartCount<1?'Empezar a comprar' : 'Seguir comprando'}</Button>

    </>
  )
}

export default CheckOut