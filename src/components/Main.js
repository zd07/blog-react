import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'

const cardContent = [
    {
        title: 'Card 1 Title',
        text: 'Some content for Card 1',
        imageUrl:img1,
    },
    {
        title: 'Card 2 Title',
        text: 'Some content for Card 2',
        imageUrl:img2,
    },
    {
        title: 'Card 3 Title',
        text: 'Some content for Card 3',
        imageUrl:img3,
    },
    {
        title: 'Card 4 Title',
        text: 'Some content for Card 4',
        imageUrl:img4,
    },
    {
        title: 'Card 5 Title',
        text: 'Some content for Card 5',
        imageUrl:img4,
    },
];

const Main = () => {
    return (
        <div>
            {cardContent.map((card, index) => (
                <Card key={index} className='mt-3' style={{ width: '30rem', marginBottom: '20px' }}>
                    <Card.Img variant="top" src={card.imageUrl} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.text}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default Main;