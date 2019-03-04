import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = props => {
  const images = props.images.map(image => {
    return (
      <div key={image.id}>
        <img src={image.urls.regular} alt=".." />
      </div>
    );
  });
  if (!images) {
    return <div>Loading...</div>;
  } else {
    return <Carousel>{images}</Carousel>;
  }
};

export default ImageCarousel;
