import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from '../../components/Main';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6} md="auto"><Main/></Col>
      </Row>
    </Container>
  )
}

export default Home;