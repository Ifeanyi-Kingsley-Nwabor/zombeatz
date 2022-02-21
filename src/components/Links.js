import React from "react";
import amp from "../images/amp.png";
import react from "../images/react.png";

const Links = () => {
  return (
    <div className="links">
      <h5 className="hide">Learn React</h5>
      <a
        className="grey-text text-lighten-4 right"
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="react hoverable" src={react} alt="amp" />
      </a>
      <h5 className="hide">Amazon Amplify</h5>
      <a
        className="grey-text text-lighten-4 right"
        href="https://aws.amazon.com/amplify/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="react hoverable" src={amp} alt="amp" />
      </a>
    </div>
  );
};

export default Links;
