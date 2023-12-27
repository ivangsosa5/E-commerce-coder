import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount/ItemCount';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';


const ItemDetail = ({producto}) => {

  const {addItem} = useContext(cartContext)

  return (
    <div>
      
        <Card className="text-center" style={{ width: '30rem' }}>
        <Card.Header></Card.Header>
        <Card.Img variant="top" src={producto.pictureUrl} />
        <Card.Body>
          <Card.Title>{producto.name}</Card.Title>
          <Card.Text>
            Descripción:
            <br/>
            {producto.description}
          </Card.Text>
          <Card.Text>
            Precio: {producto.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <ItemCount inicial = {1} stock = {10} onAdd = {(contador)=> addItem({id:producto.id, name:producto.name, price:producto.price, quantity: contador}) }/>
        </Card.Footer>
      </Card>
    
    </div>
  )
}

export {ItemDetail}