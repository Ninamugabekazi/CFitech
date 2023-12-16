import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Inscription.css'
import { Card } from 'react-bootstrap';
import img3 from '../../images/img3.jpg'

export default function Inscription() {
  return (

    <div> 
        <Card>
                <Card.Img variant="top" src={img3}  height={600}  width={600}/>
                <Card.Body>
                <Card.Text>
                <h1>Inscription</h1>
                </Card.Text>
                </Card.Body>
              </Card>
    
      
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="email" placeholder="Nom" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="password" placeholder="Prénom" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Addresse</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="email" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Ville</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Formation</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

       
      </Row>

      <div className='button'>
      <Button variant="primary" type="submit">
              Envoyer
            </Button>
      </div>
     
    </Form>
    </div>

  )
}
