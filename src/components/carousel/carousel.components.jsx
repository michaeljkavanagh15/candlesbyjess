import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselImageContainer, CarouselImage } from "./carousel.styles";

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      interval="10000"
      pause="hover"
      activeIndex={index}
      onSelect={handleSelect}
    >
      {images.map((image, key) => (
        <Carousel.Item key={key}>
          <CarouselImageContainer>
            <CarouselImage className="d-block w-100" src={image} alt="" />
          </CarouselImageContainer>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
