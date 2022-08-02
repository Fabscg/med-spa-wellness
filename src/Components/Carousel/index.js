import React from 'react'

import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block"
          src={require("../../assets/images/mask-on-face.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="cover-title">
            <h3>FACIALS</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={require("../../assets/images/massage-table.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="cover-title">
            <h3>HEALTH</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={require("../../assets/images/muskoka-chair.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <div className="cover-title">
            <h3>RELAXATION</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;