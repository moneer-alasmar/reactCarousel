import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImageItem from "./ImageItem";

const ImageCarousel = props => {
  console.log(props);
  return (
    <Carousel>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
        <p className="legend">1</p>
      </div>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
        <p className="legend">1</p>
      </div>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
        <p className="legend">1</p>
      </div>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
        <p className="legend">1</p>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
