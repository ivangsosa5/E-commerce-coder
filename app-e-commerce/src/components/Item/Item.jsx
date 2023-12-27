import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    
  const {id, name, price, pictureUrl} = producto;
  return (
    <>
      <Card>
        {/* <img src={`/assets/${pictureUrl}`} className='card-img-top'/> */}
        <Card.Img variant="top" src={`${pictureUrl}/100px160`}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title> 
          <Card.Text>Precio:{price}</Card.Text>
          <Button as={Link} to={`/item/${id}`} variant="dark">Ver más</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export {Item}