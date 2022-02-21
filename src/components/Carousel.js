import React, { useRef, useEffect } from "react";
import M from "materialize-css";

// Carousel images
import blue from "../images/blue.jpg";
import event from "../images/event.jpg";
import red from "../images/red.jpg";
import skull from "../images/skull.jpg";
import stick from "../images/stick.jpg";

const Carousel = () => {
  const carousel = useRef();
  useEffect(() => {
    if (carousel.current) {
      M.Carousel.init(carousel.current);
    }
  }, []);

  return (
    <div className="carousel" ref={carousel}>
      <a className="carousel-item" href="#one!">
        <img src={blue} alt="thing" />
      </a>
      <a className="carousel-item" href="#two!">
        <img src={stick} alt="thing" />
      </a>
      <a className="carousel-item" href="#three!">
        <img src={event} alt="thing" />
      </a>
      <a className="carousel-item" href="#four!">
        <img src={red} alt="thing" />
      </a>
      <a className="carousel-item" href="#five!">
        <img src={skull} alt="thing" />
      </a>
    </div>
  );
};

export default Carousel;
