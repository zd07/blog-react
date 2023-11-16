// Main.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
// import AddBlog from './Addblog';

const Main = ({ blogs = [], onAddBlog }) => {
  return (
    <div>
      {blogs.map((blog, index) => (
        <Card key={index} className='mt-3' style={{ width: '30rem', marginBottom: '20px' }}>
          <Card.Img variant="top" src={blog.image} />
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>{blog.content}</Card.Text>
            <Button variant="primary">Click Here</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Main;
