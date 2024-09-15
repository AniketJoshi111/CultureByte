import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <div className='bg-sky-300'>
    <Container className="font-Madimi">
      <Row className="text-center">
        <Col>
          <h1 className='mt-2'>About Us</h1>
          <p>Welcome to Culture Byte, your number one source for booking delicious meals online.</p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
          <Image src="https://via.placeholder.com/500" rounded fluid />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                At Culture Byte, our mission is to bring you the best food from the most renowned
                eateries around you, all in the comfort of your home. We believe in quality, variety,
                and customer satisfaction.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>What We Offer</Card.Title>
              <Card.Text>
                We offer a wide range of cuisines from different parts of India, including regional
                specialties. From street food to gourmet dishes, we have something for everyone.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Image src="https://via.placeholder.com/500" rounded fluid />
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
          <Image src="https://via.placeholder.com/500" rounded fluid />
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Our Vision</Card.Title>
              <Card.Text>
                Our vision is to be the go-to platform for food lovers across the nation, making it
                easy and convenient to discover and enjoy a variety of meals without stepping out.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default About;