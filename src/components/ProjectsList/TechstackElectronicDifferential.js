import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiSiemens, SiStmicroelectronics, SiAltiumdesigner } from "react-icons/si";
import { GiWireCoil } from "react-icons/gi";
import vectorCanoeImg from "../../Assets/Projects/SGT/VectorW.png";

function TechstackElectronicDifferential() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="Siemens NX">
        <SiSiemens />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Vector CANoe">
        <img src={vectorCanoeImg} alt="Vector CANoe" className="tech-icon-img" />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="STM32CubeIDE">
        <SiStmicroelectronics />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons" title="RapidHarness">
        <GiWireCoil />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons" title="Altium Designer">
        <SiAltiumdesigner />
      </Col>
    </Row>
  );
}

export default TechstackElectronicDifferential;
