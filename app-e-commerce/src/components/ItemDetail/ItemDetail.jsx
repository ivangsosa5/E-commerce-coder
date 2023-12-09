import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount/itemCount';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';




const ItemDetail = ({producto}) => {

  const {addItem} = useContext(cartContext)

  return (
    <div>
      
        <Card className="text-center">
        <Card.Header></Card.Header>
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
          {/* <Button variant="primary">Comprar</Button> */}
        </Card.Body>
        <Card.Footer className="text-muted">
          <ItemCount inicial = {1} stock = {10} onAdd = {()=> addItem({id:producto.id, name:producto.name, price:producto.price}) }/>
        </Card.Footer>
      </Card>
    
    </div>
  )
}

export {ItemDetail}