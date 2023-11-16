// Home.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from '../../components/Main';

const Home = ({ blogs, onAddBlog }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6} md="auto">
          <Main blogs={blogs} onAddBlog={onAddBlog} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
