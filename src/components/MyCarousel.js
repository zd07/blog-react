// IndividualIntervalsExample.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './Exam';
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
// import img4 from '../assets/images/img4.jpg'

const slideData = [
  { text: 'First slide', imageUrl:img1},
  { text: 'Second slide', imageUrl:img2},
  { text: 'Third slide', imageUrl:img3},
  // Add more slides as needed
];

function IndividualIntervalsExample() {
  return (
    <Carousel>
      {slideData.map((slide, index) => (
        <Carousel.Item key={index} interval={index === 0 ? 1000 : 500}>
          <ExampleCarouselImage text={slide.text} imageUrl={slide.imageUrl} />
          <Carousel.Caption>
            <h3>{`${slide.text} label`}</h3>
            <p>{`Some description for ${slide.text}.`}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default IndividualIntervalsExample;
