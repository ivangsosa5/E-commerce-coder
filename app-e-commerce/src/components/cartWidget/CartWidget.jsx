import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const CartWidget = (props) => {

  return (
    <>  
        <Button variant="dark" >  
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />
            <Badge bg="dark">{props.counter}</Badge>
        </Button>
    </>
  )
}

export {CartWidget}