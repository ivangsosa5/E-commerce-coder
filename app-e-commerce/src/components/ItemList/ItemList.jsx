import React from 'react'
import { Item } from '../Item/Item';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ItemList = ({productos}) => {
  return (
    <div>
          <Row xs={1} md={4} className="g-4">
            {productos.map(producto=>
              <Col key={producto.id}>
                <Item producto={producto}/>
              </Col>      
          )}
              
          </Row>      
    </div>
  )
}

export {ItemList} 