import React from 'react'
import Card from 'react-bootstrap/Card'
import img10 from '../../images/img10.jpg'
import img3 from '../../images/img3.jpg'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Button } from 'react-bootstrap'

export default function Jobs() {
  return (
    <div>
              <Card>
                <Card.Img variant="top" src={img10}  height={600}  width={600}/>
                <Card.Body>
                <Card.Text>
                    <h1> Nos Jobs</h1>
                </Card.Text>
                </Card.Body>
              </Card>
      <br />

      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="primary" size="lg" disabled>
        En savoir Plus
      </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
   
    </div>

  )
}
