import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import guitarra1 from '../../assets/guitarra1.jpg'
import midi1 from '../../assets/midi1.jpg'


const Item = ({producto}) => {
  
  const {id, name, description, price, pictureUrl} = producto;

  return (
    <>
        <Row xs={2} md={1} className="g-4">
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                  <Card>
                    {/* <img src={`/assets/${pictureUrl}`} className='card-img-top'/> */}
                    <Card.Img variant="top" src={`./assets/${pictureUrl}`}/>
                    <Card.Body>
                      <Card.Title>{name}</Card.Title> 
                      <Card.Text>Precio:{price}</Card.Text>
                      <Button as={Link} to={`/item/${id}`} variant="primary">Ver más</Button>
                    </Card.Body>
                  </Card>
                  <br></br>
                </Col>
                
              ))}
          </Row>


    </>
  )
}

export {Item}