import React, { useRef, useEffect } from "react";

import M from "materialize-css";
import Email from "./Email";

const Footer = () => {
  const mySuperModal = useRef();
  useEffect(() => {
    if (mySuperModal.current) {
      M.Modal.init(mySuperModal.current);
    }
  }, []);
  return (
    <footer className=" footer  ">
      <div className=" container">
        <div className="row">
          <h1 className="white-text">Zombeatz</h1>
        </div>

        <div className="row">
          <div className="d">
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3 col l3 s12"
                  href="https://nik-portfolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>My Portfolio</h5>
                </a>
              </li>

              <li>
                <a
                  className="grey-text text-lighten-3 col l3 s12"
                  href="https://de.linkedin.com/in/iknwabor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>Linkedin</h5>
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3 col l3 s12"
                  href="https://github.com/Ifeanyi-Kingsley-Nwabor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5>GitHub</h5>
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3 modal-trigger col l3 s12"
                  href="#modal1"
                >
                  <h5>Email</h5>
                </a>
              </li>
              <div id="modal1" className="modal col s12 m8 " ref={mySuperModal}>
                <div className="modal-content message_modal ">
                  <Email />
                </div>
                <div className="modal-footer">
                  <a
                    href="/"
                    className="modal-close waves-effect waves-green btn-flat blue accent-3"
                  >
                    Close
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container copyright">© 2014 Copyright Text</div>
      </div>
    </footer>
  );
};

export default Footer;
