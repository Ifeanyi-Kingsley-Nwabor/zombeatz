import React, { useRef, useEffect } from "react";

import M from "materialize-css";

// Slider images
import blue from "../images/blue.jpg";
import event from "../images/event.jpg";
import red from "../images/red.jpg";
import skull from "../images/skull.jpg";
import stick from "../images/stick.jpg";

const Slider = () => {
  const slider = useRef();
  useEffect(() => {
    if (slider.current) {
      M.Slider.init(slider.current, {
        indicators: false,
      });
    }
  }, []);

  return (
    <div className="slider " ref={slider}>
      <ul className="slides">
        <li>
          <img src={blue} alt="blue" />
          <div className="caption center-align">
            <h3>Et harum quidem rerum facilis est et expedita!</h3>
            <h5 className="light grey-text text-lighten-3">
              Nemo enim ipsam voluptatem quia voluptas sit.
            </h5>
          </div>
        </li>
        <li>
          <img src={stick} alt="stick" />
          <div className="caption center-align">
            <h3>Et harum quidem rerum facilis !</h3>
            <h5 className="light grey-text text-lighten-3">
              Nemo enim ipsam voluptatem quia voluptas sit...
            </h5>
          </div>
        </li>
        <li>
          <img src={event} alt="event" />
          <div className="caption left-align">
            <h3>Et harum quidem rerum facilis est et expedita</h3>
            <h5 className="light grey-text text-lighten-3">
              Nemo enim ipsam voluptatem quia voluptas sit..
            </h5>
          </div>
        </li>
        <li>
          <img src={red} alt="red" />
          <div className="caption right-align">
            <h3>Et harum quidem rerum</h3>
            <h5 className="light grey-text text-lighten-3">
              Nemo enim ipsam voluptatem quia voluptas sit.
            </h5>
          </div>
        </li>
        <li>
          <img src={skull} alt="skull" />
          <div className="caption center-align">
            <h3>Et harum quidem rerum facilis est et expedita distinctio!</h3>
            <h5 className="light grey-text text-lighten-3">
              Nemo enim ipsam voluptatem quia voluptas sit.
            </h5>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
