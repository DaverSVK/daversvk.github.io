import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiClickup,
  SiDiscord,
  SiAnydesk,
  SiWindows11,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={2}><div className="tech-icons tech-icons-standalone"><SiWindows11 /></div></Col>
      <Col xs={6} md={2}><div className="tech-icons tech-icons-standalone"><SiVisualstudiocode /></div></Col>
      <Col xs={6} md={2}><div className="tech-icons tech-icons-standalone"><SiClickup /></div></Col>
      <Col xs={6} md={2}><div className="tech-icons tech-icons-standalone"><SiDiscord /></div></Col>
      <Col xs={6} md={2}><div className="tech-icons tech-icons-standalone"><SiAnydesk /></div></Col>
    </Row>
  );
}

export default Toolstack;
