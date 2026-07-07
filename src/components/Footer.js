import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  return (
    <Container fluid className="footer">
              <Row>
                <Col md={12} className="home-about-social">
                  <h1>FIND ME ON</h1>
                  <p>
                    Feel free to <span className="purple">connect </span>with me
                  </p>
                  <ul className="home-about-social-links">
                    <li className="social-icons">
                      <a
                        href="https://github.com/DaverSVK"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <AiFillGithub />
                      </a>
                    </li>
       
                    <li className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/d%C3%A1vid-sz%C3%A9pv%C3%B6lgyi-a6167b210/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li className="social-icons">
                      <a
                        href="https://www.instagram.com/david__szepvolgyi/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                      >
                        <AiFillInstagram />
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
      <Row>
        <Col md="4" className="footer-copywright">
          {/* <h3>Original Developer by Soumyajit Behera</h3> */}
        </Col>
        <Col md="4" className="footer-copywright">
          {/* <h3>Copyright © {year} SB</h3> */}
        </Col>
        <Col md="4" className="footer-body">
        
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
