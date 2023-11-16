// Home.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from '../../components/Main';
import MyCarousel from '../../components/MyCarousel';

const Home = ({ blogs, onAddBlog }) => {
  return (
    <Container>
      <MyCarousel/>
      <Row className="justify-content-md-center">
        <Col xs={12} md={7}>
          <Main blogs={blogs} onAddBlog={onAddBlog} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
