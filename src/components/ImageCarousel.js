import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = props => {
  const { images } = props;
  if (images.length === 0) {
    return null;
  }
  return (
    <Carousel dynamicHeight infiniteLoop={true} showThumbs={false}>
      {images.map(image => {
        return (
          <div key={image.id}>
            <img src={image.urls.regular} alt=".." />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
