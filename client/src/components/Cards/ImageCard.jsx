import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ImageCard({src,name,pagelink}) {
  return (
    <Card style={{ width: '15rem',height:'20rem',boxShadow:'0 0 1px #353535' ,margin:'0.5rem' }} className='image-card'>
      <Card.Img variant="top" src={src} />
      <Card.Body className='imageCardBody'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          School Description
        </Card.Text>
        <Link to={pagelink}><Button variant="primary">Details</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;