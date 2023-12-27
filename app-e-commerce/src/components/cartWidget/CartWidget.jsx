import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Badge from 'react-bootstrap/Badge';
import Cart from '../Cart/Cart';


const CartWidget = (props) => {

  return (
    <>  
        <Cart>  
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />
            <Badge bg="dark">{props.counter}</Badge>
        </Cart>
    </>
  )
}

export {CartWidget}