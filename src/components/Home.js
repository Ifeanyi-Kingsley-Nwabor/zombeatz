import React from "react";
import amp from "../images/amp.png";
import react from "../images/react.png";
import Carousel from "./Carousel";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <h2>Welcome to the Home Page</h2>
      <Carousel />
      <div className="links">
        <h5 className="hide">Learn React</h5>
        <a
          className="grey-text text-lighten-4 right"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="amplify hoverable" src={react} alt="amp" />
        </a>
        <h5 className="hide">Amazon Amplify</h5>
        <a
          className="grey-text text-lighten-4 right"
          href="https://aws.amazon.com/amplify/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="amplify hoverable" src={amp} alt="amp" />
        </a>
      </div>
    </div>
  );
};

export default Home;
