import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddBlog from '../../components/Addblog';
const Blog = ( { blogs, onAddBlog }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6} md="auto"><AddBlog onAddBlog={onAddBlog} /></Col>
      </Row>
    </Container>
  )
}

export default Blog