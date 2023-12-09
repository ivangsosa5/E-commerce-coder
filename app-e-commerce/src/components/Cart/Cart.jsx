import React, { useContext } from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { cartContext } from '../../context/cartContext';



  function CartItem ({id, name, price, quantity}){
    return (
      <li>
          <div>
            <Row xs={2} md={1} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                  <Col key={idx}>
                    <Card>
                      {/* <img src={`/assets/${pictureUrl}`} className='card-img-top'/> */}
                      <Card.Img variant="top" src=''/>
                      <Card.Body>
                        <Card.Title>{name}</Card.Title> 
                        <Card.Text>Precio:{price}</Card.Text>
                        <Card.Text>{quantity}</Card.Text>
                      </Card.Body>
                    </Card>
                    <br></br>
                  </Col>
                  
                ))}
            </Row>
          </div>
      </li>

    )
  }

  const Cart = ({children})=>{

    const {cartList, removeItem, clearItems} = useContext(cartContext)

    console.log(cartList)

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
          <Button variant="dark" onClick={handleShow} className="me-2">
            {children}
          </Button>
          <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Carrito</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul>
                {cartList.map(product => (
                  <CartItem
                    key={product.id}
                    {...product}
                  />
                ))}
              </ul>
              
              
            </Offcanvas.Body>
          </Offcanvas>
      </>
    );
  }
  

export default Cart