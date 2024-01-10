import React, { useContext } from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { cartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';




  function CartItem ({id, name, price, quantity, onDelete}){
    return (
      
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
                        <Card.Text>Cantidad:{quantity}</Card.Text>
                        <Button variant='dark' onClick={()=>onDelete(id, quantity)}>Eliminar</Button>
                      </Card.Body>
                    </Card>
                    <br></br>
                  </Col>
                  
                ))}
            </Row>
          </div>
     

    )
  }

  const Cart = ({children})=>{

    const {cartList, removeItem, cartCount, clearItems, subTotal} = useContext(cartContext)   

    const [show, setShow] = useState(false);//offcanvas
  
    const handleClose = () => setShow(false);//offcanvas
    const handleShow = () => setShow(true);//offcanvas
  
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
              
                {cartList.map(product =>
                  <CartItem
                    key={product.id}
                    {...product}
                    onDelete={()=>removeItem({id:product.id, quantity:product.quantity, price:product.price})}
                  />
                )}
              <h4 hidden={cartCount <1?'':'none'}>Aún no agregaste nada al carrito</h4>
              <br />
              <h4 hidden={cartCount <1?'none':''}>Total: ${subTotal}</h4>
              <br />
              <Button variant='dark' onClick={()=>clearItems()} hidden={cartCount<1}>Vaciar Carrito</Button>
              <br/>
              <br/>
              <Button as={Link} to={'/checkOut'} onClick={handleClose} variant='dark' hidden={cartCount<1?'none':''}>Ver Carrito</Button>           
            </Offcanvas.Body>
          </Offcanvas>
      </>
    );
  }
  

export default Cart