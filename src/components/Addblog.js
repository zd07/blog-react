// AddBlog.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddBlog = ({ onAddBlog }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!onAddBlog) {
      console.error('onAddBlog function is not defined.');
      return;
    }

    if (!image) {
      alert('Please select an image.');
      return;
    }

    const newBlog = {
      title: title,
      content: content,
      image: URL.createObjectURL(image),
    };

    onAddBlog(newBlog);

    setTitle('');
    setContent('');
    setImage(null);
    document.getElementById('image').value='';
  };

  return (
    <div className="container mt-4">
      <h2>Add New Blog</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="content">
          <Form.Label>Content:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={content}
            onChange={handleContentChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image:</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Blog
        </Button>
      </Form>
    </div>
  );
};

export default AddBlog;
