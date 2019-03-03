import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImageItem from "./ImageItem";

const ImageCarousel = props => {
  const images = props.images.map(image => {
    return (
      <div className="fluid">
        <img src={image.urls.regular} />
        <p className="legend" />
      </div>
    );
  });
  console.log(props);
  return <Carousel>{images}</Carousel>;
};

export default ImageCarousel;
