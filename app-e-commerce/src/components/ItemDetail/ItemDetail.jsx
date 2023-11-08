import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount/itemCount';

const ItemDetail = ({producto}) => {
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
        <ItemCount inicial = {1} stock = {10} onAdd = {(contador)=>console.log('Se agregó al carrito', contador)}/>
      </Card.Footer>
    </Card>
    </div>
  )
}

export {ItemDetail}